const Product = ({ product }) => {
    return (
        <div class="card">
            <div class="front-face">
                <img src="img/logo.png" alt="" />
                <div class="nombre">
                    <p>{product.name}</p>
                </div>
            </div>
            <span class="back-face">
                <p>
                    {product.description}
                </p>
                <button>AGREGAR</button>
            </span>
        </div>
    );
};
export default Product;
