import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/Logement/Logement";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/logements/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
