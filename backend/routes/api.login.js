import e from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const router = e.Router()

router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            throw { message: "Please do not leave blank spaces.", statusCode: 400 }
        }

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (user) {
            const storedPassword = user.password;

            // Compare the provided password with the stored hashed password
            const passwordMatch = await bcrypt.compare(password, storedPassword);

            if (passwordMatch) {
                const token = jwt.sign(
                    { user_id: user.id, email: email },
                    process.env.TOKEN_KEY,
                    { expiresIn: "7d" }
                );

                return res.send({ user, token });
            } else {
                // Incorrect password
                throw { statusCode: 400, message: "Invalid email or password." }
            }
        } else {
            // User not found
            throw { statusCode: 400, message: "Invalid email or password." }
        }
    } catch (error) {
        // Pass the error to the error handling middleware
        next(error);
    }
});

router.post('/check-token', async (req, res, next) => {
    try {
        const { token } = req.body
        if (!token) {
            res.status(400).send("NO TOKEN FOUND");
        }
        console.log(token)
        const authData =
            await jwt.verify(token, process.env.TOKEN_KEY, (err, authData) => {
                if (!err) return authData;
            });
        console.log(authData)
        const user = await prisma.user.findUnique({
            where: {
                email: authData.email
            }
        })

        if (user) {

            const token = jwt.sign(
                { user_id: user.user_id, email: user.email },
                process.env.TOKEN_KEY,
                { expiresIn: "7d" }
            );

            res.send({ user, token })
        }
        else next("THERE IS NO SUCH USER")

    } catch (error) {
        next(error)
    }
})

export default router