import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'

// Pages
import Home from './Pages/Home';
import AboutUs from './Pages/About';
import ServicesPage from './Pages/Services';
import BlogPage from './Pages/Blog';
import ContactUs from './Pages/ContactUs';


const App = () => {
  return (
    <Router>

      <ScrollToTop/>
      <div className="flex flex-col min-h-screen">
        {/* Navbar hamesha top par rahega */}
        <Navbar />

        {/* Main Content Area: Routing yahan handle hogi */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path="/contact" element={<ContactUs />} />
            
          <Route path="*" element={<div className="py-20 text-center text-2xl">404 - Page Not Found</div>} />
          </Routes>
        </main>
    
        {/* Footer hamesha bottom par rahega */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;