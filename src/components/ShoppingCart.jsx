import { useSelector } from 'react-redux'

export default function ShoppingCart({ cartActive }) {
    return (
        <div className={`shopping-cart w-2/5 h-60 fixed bg-slate-500 top-28 right-1 ${cartActive ? "flex" : "hidden"}`}>

        </div>
    )
}
