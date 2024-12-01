import "./App.css";

import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";

function App() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Redux Cart (with toolkit)</h1>
            <Products />
            <Cart />
        </div>
    );
}

export default App;
