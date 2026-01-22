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

          // const updateCartItem = async () => {
          //   await axios.put(`/api/cart-items/${cartItem.productId}`, {
          //     deliveryOptionId: deliveryOptions.id,
          //   });
          //   await loadCart();
          // };

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

              <div className="cart-item-details-grid">
                <CartItemDetails
                  cartItem={cartItem}
                  deleteCartItem={deleteCartItem}
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
