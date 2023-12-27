import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ShoppingCart from './ShoppingCart'

export default function Navbar() {

    const [cartActive, setCartActive] = useState(false)

    return (
        <div className="navbar bg-lime-300 flex justify-between px-12 py-8 align-middle sticky h-32">
            <div className="left">
                <Link to={"/"}><FontAwesomeIcon icon={faCss3Alt} size='3x' /></Link>
            </div>
            <div className="right flex w-1/3">
                <Link to={"/products"} className="m-auto p-3 bg-green-100">PRODUCTS</Link>
                <button className="p-3" onClick={() => { setCartActive(!cartActive) }}><FontAwesomeIcon icon={faCartShopping} size='2x' /></button>
                <ShoppingCart cartActive={cartActive} />
            </div>
        </div>
    )
}
