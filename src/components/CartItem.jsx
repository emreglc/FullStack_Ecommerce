import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/stores/slices/cart'

export default function CartItem({ name, price, quantity, index }) {

    const dispatch = useDispatch(state => state.cart)

    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden my-2 shadow-md">
            <div className="flex">
                <div className="flex-shrink-0">
                    <img className="h-48 w-48 mr-8 object-cover" src={"src/assets/img/product_dummy.png"} alt={name} />
                </div>
                <div className="p-4 my-auto">
                    <div className="text-sm text-indigo-500 font-semibold">
                        {name}
                    </div>
                    <p className="mt-1 text-gray-500">${price} each</p>
                    <p className="mt-1 text-gray-500">Quantity: {quantity}</p>
                    <div className="mt-2">
                        <button className="bg-indigo-500 text-white py-1 px-2 rounded" onClick={() => dispatch(removeFromCart(index))}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
