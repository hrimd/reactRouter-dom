import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Navigation/Home";
import About from "./Navigation/About";
import Contact from "./Navigation/Contact";
import Error from "./Navigation/Error";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
