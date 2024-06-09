import { useNavigate } from "react-router-dom";
import { saveOrder } from "../../api/orderApi";
import { useCart } from "../../context/globalContext";
import { useCallback } from "react";

const Cart = () => {
  const { cart, handleIncrement, handleDecrement } = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSaveOrder = useCallback(async () => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    console.log(totalPrice);
    await saveOrder({ items: cart, totalCost: totalPrice });
    navigate("/orders");
  }, [cart, navigate]);

  return (
    <div className="container">
      <h2>Cart</h2>
      <ul className="list-group">
        {cart.map((item) => (
          <li
            key={item._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => handleIncrement(item._id)}
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => handleDecrement(item)}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSaveOrder}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
