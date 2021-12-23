import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import Home from './pages/Home';
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
