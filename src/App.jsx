import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedNavbar from "./pages/SharedNavbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Error from "./pages/Error"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedNavbar/>}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
            <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
