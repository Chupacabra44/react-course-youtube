import { useState } from "react";
import axios from "axios";
import { formatMoney } from "../../utils/money";

const Product = ({ product, loadCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);

  const addToCart = async () => {
    await axios.post("/api/cart-items", {
      productId: product.id,
      quantity: quantity,
    });
    await loadCart();
    setShowAdded(true);

    setTimeout(() => {
      setShowAdded(false);
    }, 1500);
  };

  const selectQuantity = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={product.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">{formatMoney(product.priceCents)}</div>

      <div className="product-quantity-container">
        <select onChange={selectQuantity} value={quantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      {showAdded && (
        <div className="added-to-cart">
          <img src="images/icons/checkmark.png" />
          Added
        </div>
      )}

      <button onClick={addToCart} className="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
