import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home/Home";
import Header from "./Component/Shared/Header";
import Footer from "./Component/Shared/Footer";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Specs from "./Component/Specs/Specs";
import Blogs from "./Component/Home/Blogs";
// ..
AOS.init();

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spece" element={<Specs />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
