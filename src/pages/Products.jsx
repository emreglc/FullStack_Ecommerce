import Product from "../components/Product";

export default function Products() {
    return (
        <div className="flex">
            <Product name={"product 1"} price={100} id={1} />
            <Product name={"product 2"} price={200} id={2} />
            <Product name={"product 3"} price={300} id={3} />
            <Product name={"product 4"} price={400} id={4} />
        </div>
    )
}
