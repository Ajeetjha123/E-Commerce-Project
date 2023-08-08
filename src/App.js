import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Store from "./components/Store";
import Home from "./components/Home";
import About from "./components/About";
import Footer from './components/Footer/Footer';
function App() {
     
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="store" element={<Store />} exact />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}
export default App;
