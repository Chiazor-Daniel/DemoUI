import './App.css';
import NavBar from './layout/navbar';
import Footer from './layout/footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TradePage from './pages/Products';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-auto bg-gradient-to-br from-gray-950 via-gray-900 to-violet-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/10 via-purple-500/5 to-transparent"></div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<TradePage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;