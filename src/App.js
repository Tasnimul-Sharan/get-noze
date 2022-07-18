import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home/Home";
import Header from "./Component/Shared/Header";
import Footer from "./Component/Shared/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
