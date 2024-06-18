import "./ProductView.css";
import { useParams } from "react-router-dom";
import boysClothesData from "./../data/boys/Cloths";

function ProductView() {
    const { id } = useParams();
    const selectedProduct = boysClothesData.find((shoe) => shoe.id === parseInt(id));

    return (
        <div className="fullview">
            {selectedProduct ? (
                <div className="parent">
                    <div className="child1">
                        <img className="fullavatar" src={selectedProduct.productsimgs} alt="Product" />
                    </div>
                    <div className="child2">
                        <h3>"Welcome to Babies Corner, your one-stop destination for the finest and cutest baby products, where every corner is filled with love, comfort, and joy for your little ones!"</h3>
                        <h2>Product ID: {id}</h2>
                        <h1>{selectedProduct.content}&ensp;</h1>
                        <div className="pricecontainer">
                            <span className="date">{selectedProduct.date}</span>
                            &ensp;
                            <del>{selectedProduct.Price}</del>&ensp;
                            <span className="offer">{selectedProduct.Offer}</span>
                        </div>
                        <p>Features:</p>
                        <ul>
                            {selectedProduct.Technology.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                        <button className="btn"> Buy Now</button>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
}

export default ProductView;
