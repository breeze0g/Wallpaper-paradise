import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Start';
import Wallpapers from './Wallpapers';
import About from './About';
import Contact from './Contact';
import "./App.css";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Wallpapers" element={<Wallpapers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;