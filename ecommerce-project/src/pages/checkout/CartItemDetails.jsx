import axios from "axios";
import { useState, useEffect } from "react";
import { formatMoney } from "../../utils/money";

const CartItemDetails = ({ cartItem, deleteCartItem, loadCart }) => {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQunatity] = useState(cartItem.quantity);

  const updateQuantity = async () => {
    if (isUpdatingQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setIsUpdatingQuantity(false);
    } else {
      setIsUpdatingQuantity(true);
    }
  };

  const updateQuantityInput = (event) => {
    setQunatity(event.target.value);
  };

  const handleQuantityKeyDown = (event) => {
    if (event.key === "Enter") {
      updateQuantity();
    } else if (event.key === "Escape") {
      setQunatity(cartItem.quantity);
      setIsUpdatingQuantity(false);
    }
  };

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            {isUpdatingQuantity ? (
              <input
                onChange={updateQuantityInput}
                onKeyDown={handleQuantityKeyDown}
                value={quantity}
                type="text"
                style={{ width: "50px" }}
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            onClick={updateQuantity}
            className="update-quantity-link link-primary"
          >
            Update
          </span>
          <span
            onClick={deleteCartItem}
            className="delete-quantity-link link-primary"
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItemDetails;
