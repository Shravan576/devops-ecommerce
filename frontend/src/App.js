import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const fetchProducts = async () => {

    const res = await fetch("http://localhost:5000/api/products");

    const data = await res.json();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {

    if (!name || !price) {
      alert("Enter all fields");
      return;
    }

    await fetch("http://localhost:5000/api/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        price
      })
    });

    setName("");
    setPrice("");

    fetchProducts();
  };

  return (
    <div className="container">

      <h1 className="title">
        DevOps E-Commerce App
      </h1>

      <div className="form">

        <input
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={addProduct}>
          Add Product
        </button>

      </div>

      <div className="products">

        {
          products.map((product, index) => (

            <div className="card" key={index}>

              <h2>{product.name}</h2>

              <p>₹ {product.price}</p>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default App;