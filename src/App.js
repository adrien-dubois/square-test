import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from "./components";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes >
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;