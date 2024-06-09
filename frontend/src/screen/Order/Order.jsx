import { useState, useEffect } from "react";
import { getOrders } from "../../api/orderApi";

function PastOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">All Orders</h2>
      {orders.map((order) => (
        <div key={order._id} className="card mb-4">
          <div className="card-header">
            <h3>Order ID: {order._id}</h3>
          </div>
          <div className="card-body">
            <p>Total Cost: ${order.totalCost}</p>
            <ul className="list-group">
              {order.items.map((item) => (
                <li key={item._id} className="list-group-item">
                  {item?.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PastOrder;
