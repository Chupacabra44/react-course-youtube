import axios from "axios";
import DeliveryDate from "./DeliveryDate";
import DeliveryOptions from "./DeliveryOptions";
import CartItemDetails from "./CartItemDetails";

const OrderSummary = ({ deliveryOptions, cart, loadCart }) => {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            },
          );
          const deleteCartItem = async () => {
            await axios.delete(`api/cart-items/${cartItem.productId}`);
            await loadCart();
          };

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

              <div className="cart-item-details-grid">
                <CartItemDetails
                  cartItem={cartItem}
                  deleteCartItem={deleteCartItem}
                  loadCart={loadCart}
                />
                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OrderSummary;
