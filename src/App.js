import { Routes, Route } from "react-router-dom";
import './App.scss';
import Contact from "./pages/Contact";
import Home from './pages/Home';

function App() {
  return (
    <>
      <header>
        <nav>
          <Container className="d-flex justify-content-center">
            <Link to="/" className="px-2">Home</Link>
            <Link to="/contact" className="px-2">Contact us</Link>
          </Container>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
