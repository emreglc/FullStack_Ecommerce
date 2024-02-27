import e from "express"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'


const prisma = new PrismaClient()
const router = e.Router()

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

router.post("/signup", async (req, res, next) => {

    try {

        const { name, surname, email, password } = req.body

        if (!name || !surname || !email || !password) throw { message: "Please do not leave blank spaces.", statusCode: 400 }

        if (!isValidEmail(email)) {
            throw { message: "Please enter a valid email address.", statusCode: 400 };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                surname,
                email,
                password: hashedPassword,
            },
        });

        if (user) {
            const token = jwt.sign(
                { user_id: user.id, email: email },
                process.env.TOKEN_KEY,
                { expiresIn: "7d" }
            );
            res.status(200).send({ user, token })
        } else {
            throw new Error("Unexpected error occured, please try again.")
        }

    } catch (error) {
        next(error)
    }

})

export default router