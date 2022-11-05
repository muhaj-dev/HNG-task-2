import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Footer from './Component/Footer';


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="w-[90%]  mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
