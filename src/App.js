import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import Contact from "./pages/Contact";
import Home from './pages/Home';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
