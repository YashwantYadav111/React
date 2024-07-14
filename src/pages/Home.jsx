import React from 'react';
import TopStrip from '../components/TopStrip';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import GridSection from '../components/GridSection';
import Features from '../components/Features';
import FitGuide from '../components/FitGuide';
import EmailSubscription from '../components/EmailSubscription';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
function Home() {
  return (
    <div>
     
      <Hero />
      <GridSection />
      <div className="px-28 py-7">
        <Banner />
      </div>

      <Features />
      <ProductList />
      <EmailSubscription />
      <Footer />
    </div>
  );
}

export default Home;
