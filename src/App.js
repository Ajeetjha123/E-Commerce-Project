import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Store from "./components/Store";
import Home from "./components/Home";
import About from "./components/About";

function App() {
     
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/store" element={<Store />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
      </Routes>
    </BrowserRouter>
    
  );
}
export default App;
