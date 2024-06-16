import "./ProductCard.css";
import { Link } from "react-router-dom";

function MyProducts({ id, content, productsimgs, date, Price, Offer, Technology ,category}) {
  return (
    <Link className="blogcard" to={`/product/${id}`}>
      <div className="container">
        <div className="productsimgs-container">
          <img src={productsimgs} alt="Product" className="product-img" />
          <h1 className="pre-content">{content.substring(0, 50)}...</h1>
          <div className="pricecontainer">
            <span>
              <span className="date">{date}</span>
              &ensp;
              <del>{Price}</del>&ensp;
              <span className="offer">{Offer}</span>
            </span>
          </div>
        </div>
        <div className="techcontainer">
          <div className="technologies">
            {Technology.map((tech, i) => (
              <span key={i} className="technology">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MyProducts;
