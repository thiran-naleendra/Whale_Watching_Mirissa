import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Tours from "./pages/Tours";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

// ScrollToTop Component: Ensures page starts at top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <Router>
          <Helmet defaultTitle="Whale Watching Mirissa | Sri Lanka Whale Tours" titleTemplate="%s | Whale Watching Mirissa">
            {/* Global Metadata - Fallbacks if specific pages miss them */}
            <meta name="description" content="Join Mirissa's top-rated whale watching tours. 15+ years experience, 95% sighting success rate for whales and dolphins." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://whalewatchingmirissa.com/" />
            <meta property="og:site_name" content="Whale Watching Mirissa" />
            <meta name="theme-color" content="#0ea5e9" />
          </Helmet>

          {/* Analytics & Technical Helpers */}
          <div dangerouslySetInnerHTML={{ __html: `
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W4QZGDC8"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          `}} />
          
          <ScrollToTop />
          <Navigation />
          
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* 404 Catch-all could be added here */}
            </Routes>
          </main>

          <Footer />
        </Router>
      </HelmetProvider>
    </React.StrictMode>
  );
}

export default App;