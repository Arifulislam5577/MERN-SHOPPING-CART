import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProductDetials from "./components/productDetails/ProductDetials";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="colors/:color" element={<Shop />}></Route>
        </Route>
        <Route path="/product/:id" element={<ProductDetials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
