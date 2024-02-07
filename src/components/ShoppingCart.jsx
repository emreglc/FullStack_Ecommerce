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
        <div className={`shopping-cart p-5 fixed bg-slate-500 top-28 right-1 ${cartActive ? "flex" : "hidden"} flex-col`}>
            {cart.length > 0 ?
                cart.map((item, key) => (
                    <CartItem name={item.name} price={item.price} id={item.id} key={key} quantity={item.quantity} />
                ))
                :
                <span>YOUR SHOPPING CART IS EMPTY</span>}
            {cart.length > 0 && (
                <div className="mt-4 flex justify-between items-center">
                    <div>
                        <span className="text-gray-600">Total:</span>
                        <span className="font-bold ml-2">${totalPrice}</span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={null}>
                        Continue to Payment
                    </button>
                </div>
            )}
        </div>
    )
}
