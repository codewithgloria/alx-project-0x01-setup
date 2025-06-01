import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        <h1 className="text-7xl font-thin">Welcome Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;