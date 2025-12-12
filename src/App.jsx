import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Project from "./components/Project";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Pages from "./components/Pages";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/service"
            element={
              <>
                <Service />
              </>
            }
          />
          <Route
            path="/project"
            element={
              <>
                <Project />
              </>
            }
          />
          <Route
            path="/pages"
            element={
              <>
                <Pages />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                {" "}
                <Contact />
              </>
            }
          />
          <Route path="*" element={<>404 Page is Not Found</>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
