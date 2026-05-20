import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import NoPage from './components/NoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;