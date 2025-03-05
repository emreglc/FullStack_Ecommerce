import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { useEffect, useState } from 'react';

export default function ShoppingCart({ cartActive }) {

    const cart = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(0);
        if (cart.length > 0) {
            setTotalPrice(prevTotal => {
                return cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, prevTotal);
            });
        }
    }, [cart]);

    console.log("cart: " + cart)
    return (
        <div className={`shopping-cart p-5 fixed bg-white shadow-lg rounded-lg top-28 right-1 ${cartActive ? "flex" : "hidden"} flex-col`}>
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
            {cart.length > 0 ? (
                cart.map((item, key) => (
                    <CartItem name={item.name} price={item.price} id={item.id} key={key} quantity={item.quantity} />
                ))
            ) : (
                <span className="text-gray-500">Your shopping cart is empty</span>
            )}
            {cart.length > 0 && (
                <div className="mt-4 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Total:</span>
                        <span className="font-bold text-lg">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" onClick={null}>
                        Continue to Payment
                    </button>
                </div>
            )}
        </div>
    )
}
