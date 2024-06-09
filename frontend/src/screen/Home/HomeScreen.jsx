import { useState, useEffect } from "react";
import { getItems } from "../../api/menuItemApi";
import { useCart } from "../../context/globalContext";
const HomeScreen = () => {
  const [menuItem, setItems] = useState([]);

  const { addItem, cart } = useCart();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      console.log(response.data);
      if (response?.data?.length > 0) {
        setItems(response.data);
      }
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };

  const handleClick = (item) => {
    // Check if the item is already present in the cart
    if (cart.find((cartItem) => cartItem._id === item._id)) {
      // If the item is already present, do nothing or show a message to the user
      console.log("Item is already in the cart");
    } else {
      // If the item is not present, add it to the cart
      addItem(item);
    }
  };
  return (
    <div className="container mt-5">
      <div className="container mt-4">
        <h1>Welcome to the Restaurant</h1>
        <p>Choose items from the menu and add them to your cart.</p>

        <h2>Menu Items</h2>
        <div className=" row row-cols-1 row-cols-md-4 g-4  ">
          {menuItem?.map((item) => (
            <div key={item._id} className="col ">
              <div className="card">
                <img
                  src={item.url}
                  className="card-img-top"
                  alt={item.url}
                  style={{ objectFit: "cover", aspectRatio: "16/9" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                  <p className="card-text">{item.description}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleClick(item)}
                    disabled={cart.find(
                      (cartItem) => cartItem._id === item._id
                    )}
                  >
                    {cart.find((cartItem) => cartItem._id === item._id)
                      ? "In Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
