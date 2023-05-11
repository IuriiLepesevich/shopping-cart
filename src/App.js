import "./styles/App.css";
import productsArray from "./productsArray.js";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState(productsArray);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsAmount, setCartItemsAmount] = useState(0);
  const [cartItemsTotalPrice, setCartItemsTotalPrice] = useState(0);

  const addToCart = (e) => {
    const targetId = e.target.id;
    if (
      cartItems.some((someItem) => {
        if (someItem.id === targetId) {
          setCartItems(
            cartItems.map((mapItem) => {
              if (mapItem.id === targetId)
                return {
                  name: mapItem.name,
                  type: mapItem.type,
                  price: mapItem.price,
                  id: mapItem.id,
                  amount: mapItem.amount + 1,
                };
              else return mapItem;
            })
          );
          return true;
        } else return false;
      })
    )
      return;
    else {
      const newItem = products.filter((product) => product.id === targetId)[0];
      setCartItems(
        cartItems.concat({
          name: newItem.name,
          type: newItem.type,
          price: newItem.price,
          id: targetId,
          amount: 1,
        })
      );
    }
  };

  const decrementCartItemAmount = (e) => {
    const targetId = e.target.id;
    setCartItems(
      cartItems.map((item) => {
        if (item.id === targetId)
          return {
            name: item.name,
            type: item.type,
            price: item.price,
            id: targetId,
            amount: item.amount - 1,
          };
        else return item;
      })
    );
  };

  const incrementCartItemAmount = (e) => {
    const targetId = e.target.id;
    setCartItems(
      cartItems.map((item) => {
        if (item.id === targetId)
          return {
            name: item.name,
            type: item.type,
            price: item.price,
            id: targetId,
            amount: item.amount + 1,
          };
        else return item;
      })
    );
  };

  useEffect(() => {
    setCartItemsAmount(cartItems.reduce((prev, curr) => prev + curr.amount, 0));
    setCartItemsTotalPrice(
      cartItems.reduce((prev, curr) => prev + curr.price * curr.amount, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    setCartItems(cartItems.filter((item) => item.amount >= 1));
  }, [cartItemsAmount]);

  return (
    <div className="App">
      <NavBar cartSize={cartItemsAmount} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop products={products} handleAdd={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                items={cartItems}
                totalPrice={cartItemsTotalPrice}
                decrement={decrementCartItemAmount}
                increment={incrementCartItemAmount}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
