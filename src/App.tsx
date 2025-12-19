import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
//import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Tours from "./pages/Tours";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <React.StrictMode>
        <HelmetProvider>
          <Helmet>
            {/* Default Title */}
            <title>Whale Watching Mirissa | Sri Lanka Whale Tours</title>

            {/* Main Meta */}
            <meta
              name="description"
              content="Experience unforgettable whale watching tours in Mirissa, Sri Lanka. See blue whales, dolphins and more with expert guides and safe boats."
            />
            <meta
              name="keywords"
              content="whale watching Mirissa, blue whale tours, dolphin watching Sri Lanka, Mirissa boat tours, whale watching Sri Lanka"
            />
            <meta name="author" content="Whale Watching Mirissa" />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://whalewatchingmirissa.com/" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="Whale Watching Mirissa | Best Whale Tours in Sri Lanka"
            />
            <meta
              property="og:description"
              content="Join Mirissa’s best whale watching tours. See whales, dolphins & turtles with expert crews and safe boats. Book online now!"
            />
            <meta
              property="og:image"
              content="https://whalewatchingmirissa.com/assets/logo-BXiZ3lwa.png"
            />
            <meta
              property="og:url"
              content="https://whalewatchingmirissa.com/"
            />
            <meta property="og:site_name" content="Whale Watching Mirissa" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter SEO */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="Whale Watching Mirissa | Best Blue Whale Tours"
            />
            <meta
              name="twitter:description"
              content="Top-rated whale watching tours in Mirissa. Safe boats, friendly crew, breathtaking sightings."
            />
            <meta
              name="twitter:image"
              content="https://whalewatchingmirissa.com/assets/logo-BXiZ3lwa.png"
            />

            {/* Theme color */}
            <meta name="theme-color" content="#0ea5e9" />
          </Helmet>
          <Router>
            {/* Google Tag Manager (noscript) */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                <noscript>
                  <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-W4QZGDC8"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    >
                </noscript>
                `,
              }}
            />
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </Router>
        </HelmetProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
