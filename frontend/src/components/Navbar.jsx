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
        <div className="navbar bg-lime-300 flex justify-between px-12 py-8 align-middle sticky h-32">
            <div className="left">
                <Link to={"/"}><FontAwesomeIcon icon={faCss3Alt} size='3x' /></Link>
            </div>
            <div className="right flex">
                {user ?
                    <span className="p-3 relative">
                        <button className="flex flex-col text-lg font-medium" onClick={() => dispatch(logout())} >
                            <FontAwesomeIcon icon={faArrowRightToBracket} size='2x' className='m-auto' /><h4>LOGOUT</h4>
                        </button>
                    </span>
                    :
                    <span className="p-3 relative">
                        <Link className="flex flex-col text-lg font-medium" to="/auth" >
                            <FontAwesomeIcon icon={faArrowRightToBracket} size='2x' className='m-auto' /><h4>LOGIN</h4>
                        </Link>
                    </span>
                }
                <button className="p-3 relative" onClick={() => { setCartActive(!cartActive) }}><FontAwesomeIcon icon={faCartShopping} size='2x' />
                    {cart.length > 0 &&
                        <span className="rounded-full border-blue-950 border-2 h-6 w-6 inline-block text-sm bg-slate-300 absolute bottom-1 right-0">
                            {cart.length}
                        </span>
                    }
                </button>
                <ShoppingCart cartActive={cartActive} />
                {user &&
                    <span className="p-3 relative ml-8">
                        <button className="flex flex-col text-lg font-medium" >
                            <FontAwesomeIcon icon={faUser} size='2x' className='m-auto' /><h4>{user.name}</h4>
                        </button>
                    </span>
                }

            </div >
        </div >
    )
}
