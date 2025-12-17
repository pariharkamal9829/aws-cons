import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import ExamPrep from "./pages/ExamPrep";
import APNEnablement from "./pages/APNEnablement";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/exam-prep" element={<ExamPrep />} />
              <Route path="/apn-enablement" element={<APNEnablement />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" richColors />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
