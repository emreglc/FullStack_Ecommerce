import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/stores/slices/cart'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function Product({ name, price, id }) {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    return (
        <div className="rounded overflow-hidden shadow-lg bg-gray-100 w-72">
            <img
                src="src/assets/img/product_dummy.png"
                alt={name}
                className="w-full"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">${price}</p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                    dispatch(addToCart({ name, price, id }));
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Product added to cart successfully',
                        timer: 1000
                    });
                }}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
