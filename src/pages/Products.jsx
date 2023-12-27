import Product from "../components/Product";

export default function Products() {
    return (
        <div className="flex">
            <Product name={"product 1"} price={100} />
            <Product name={"product 2"} price={200} />
            <Product name={"product 3"} price={300} />
            <Product name={"product 4"} price={400} />
        </div>
    )
}
