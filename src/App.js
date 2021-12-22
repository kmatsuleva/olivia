import { Routes, Route } from "react-router-dom";
import './App.scss';
import Contact from "./pages/Contact";
import Home from './pages/Home';


function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
