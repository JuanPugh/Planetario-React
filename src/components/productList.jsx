import Product from "./product";

const ProductList = ({ products }) => {

    return (
        <div className="container-card">
            {
                products.length > 0 &&

                products.map((product) => {

                    return (
                        <Product   key={product.id} product={product} />
                    )

                })


            }
        </div>
    )


}; export default ProductList;