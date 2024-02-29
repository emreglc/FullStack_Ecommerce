import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Auth from "./pages/Auth"
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { login, logout } from './redux/stores/slices/auth';


const checkToken = async () => {

    const token = localStorage.getItem("token")
    if (!token) return

    return fetch(`http://localhost:3001/api/check-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    })
        .then(data => data.json())

}

function App() {

    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        async function autoLogin() {
            if (!user) {
                const data = await checkToken()
                if (data) dispatch(login({ user: data.user, token: data.token }))
                else dispatch(logout())
            }
        }
        autoLogin()
    }, [])

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={user ? <Home /> : <Auth />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </>
    )
}

export default App
