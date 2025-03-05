import Product from "../components/Product";

export default function Products() {
    return (
        <div className="flex gap-8 px-6 py-4 justify-center flex-wrap">
            <Product name={"product 1"} price={100} id={1} />
            <Product name={"product 2"} price={200} id={2} />
            <Product name={"product 3"} price={300} id={3} />
            <Product name={"product 4"} price={400} id={4} />
            <Product name={"product 5"} price={900} id={5} />
            <Product name={"product 6"} price={800} id={6} />
            <Product name={"product 7"} price={600} id={7} />
            <Product name={"product 8"} price={700} id={8} />
        </div>
    )
}
