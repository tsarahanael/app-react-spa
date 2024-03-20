import './Petite.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <Router >
    <Navbar />
    <main>
    {}
       <Routes>
           <Route path="/" element = {<Home />} />
           <Route path="/products" element = {<Products />} />
           <Route path="/contact" element = {<Contact />} />
           <Route path="*" element = { <PageNotFound /> } />            
       </Routes>
    </main>
    <Footer />
    q</Router>
  );
}

export default App;