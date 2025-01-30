import { useEffect, useState } from "react";
 
const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function get() {
    setLoading(true);
    let response = await fetch("https://dummyjson.com/products");  
    let result = await response.json();
    setData(result.products);
    setLoading(false);
  }

  useEffect(() => {
    get();
    return () => {
      console.log("Clean up");
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Shivang Product</h1>
        </div>
        <ul className="navbar-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>

      {/* Product List */}
      <div className="products">
        {loading && <h1 className="loading">Loading...</h1>}
        {data &&
          data.map((element) => (
            <div className="product-card" key={element.id}>
              <img src={element.thumbnail} alt={element.title} /> x
              <h1>{element.title}</h1>
              <p>Price: ${element.price}</p>
            </div>
          ))}
      </div>

      {/* Footer */}
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>About Us</h2>
          <p>We are a leading online store providing top-quality products at affordable prices.</p>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <p>Email: Shivangkad9@gmail.com</p>
          <p>Phone: +91 9825600074</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Product Store. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Product;
