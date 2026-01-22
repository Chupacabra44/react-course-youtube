import dayjs from "dayjs";

const DeliveryDate = ({ selectedDeliveryOption }) => {
  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D",
      )}
    </div>
  );
};

export default DeliveryDate;
