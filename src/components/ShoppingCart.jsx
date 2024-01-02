import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export default function ShoppingCart({ cartActive }) {

    const cart = useSelector((state) => state.cart);
    console.log("cart: " + cart)
    return (
        <div className={`shopping-cart p-5 fixed bg-slate-500 top-28 right-1 ${cartActive ? "flex" : "hidden"} flex-col`}>
            {cart && cart.map((item, key) => (
                <CartItem name={item.name} price={item.price} id={item.id} key={key} quantity={item.quantity} />
            ))}
        </div>
    )
}
