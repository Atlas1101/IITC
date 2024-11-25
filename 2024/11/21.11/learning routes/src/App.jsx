import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//pages import
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Articles from "./pages/Articles/Articles.jsx";
//components import
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/articles" element={<Articles />}>
            <Route path="news" element={<h2>This is the news section</h2>} />
            <Route
              path="politics"
              element={<h2>This is the Politics section</h2>}
            />
            <Route path="tech" element={<h2>This is the Tech section</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
