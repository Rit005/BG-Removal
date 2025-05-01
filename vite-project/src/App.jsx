// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Assuming Home.jsx exists in pages
import Result from './pages/Result';
import Buycredit from './pages/Buycredit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  console.log("Rendering App with Navbar and Routes");
  return (
    <div className='min-h-screen bg-slate-50 flex flex-col'>
      <ToastContainer position='bottom-right' />
      <Navbar /> {/* Navbar is back */}
      <main className="flex-grow">
        <Routes> {/* Routes are back */}
          {/* Route still points to Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<Buycredit />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
export default App;