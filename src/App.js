import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Message from "./pages/Message";
import Support from "./pages/Support";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/reports" element={<Reports />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/message" element={<Message />}/>
          <Route path="/support" element={<Support />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
