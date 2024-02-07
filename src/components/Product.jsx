import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/stores/slices/cart'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function Product({ name, price, id }) {

    const dispatch = useDispatch()

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                src="src/assets/img/product_dummy.png" // Replace with your product image URL
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
                    });
                }}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
