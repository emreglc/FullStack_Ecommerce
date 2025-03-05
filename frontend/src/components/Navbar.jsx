import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightToBracket, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ShoppingCart from './ShoppingCart'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/stores/slices/auth'

export default function Navbar() {

    const [cartActive, setCartActive] = useState(false)

    const cart = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    return (
        <nav className="navbar bg-blue-400 flex justify-between px-8 py-6 items-center sticky top-0 shadow-md">
            <div className="left">
                <Link to={"/"} className="text-3xl font-bold text-gray-800">
                    <FontAwesomeIcon icon={faCss3Alt} size='2x' />
                </Link>
            </div>
            <div className="right flex items-center space-x-6">
                {user ? (
                    <button className="flex flex-col items-center text-lg font-medium text-gray-800 hover:text-gray-600" onClick={() => dispatch(logout())}>
                        <FontAwesomeIcon icon={faArrowRightToBracket} size='2x' className='m-auto' />
                        <span>LOGOUT</span>
                    </button>
                ) : (
                    <Link className="flex flex-col items-center text-lg font-medium text-gray-800 hover:text-gray-600" to="/auth">
                        <FontAwesomeIcon icon={faArrowRightToBracket} size='2x' className='m-auto' />
                        <span>LOGIN</span>
                    </Link>
                )}
                <button className="relative flex items-center text-gray-800 hover:text-gray-600" onClick={() => setCartActive(!cartActive)}>
                    <FontAwesomeIcon icon={faCartShopping} size='2x' />
                    {cart.length > 0 && (
                        <span className="rounded-full bg-red-500 text-white text-xs font-bold h-6 w-6 flex items-center justify-center absolute -top-2 -right-2">
                            {cart.length}
                        </span>
                    )}
                </button>
                <ShoppingCart cartActive={cartActive} />
                {user && (
                    <div className="flex items-center space-x-3">
                        <FontAwesomeIcon icon={faUser} size='2x' className='text-gray-800' />
                        <span className="text-lg font-medium text-gray-800">{user.name}</span>
                    </div>
                )}
            </div>
        </nav>
    )
}
