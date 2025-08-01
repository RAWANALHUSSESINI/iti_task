import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Pets from './Pages/Pets/Pets';
import PetDetails from './Pages/PetDetails/PetDetails';
import Adopt from './Pages/Adopt/Adopt';
import NotFound from './Pages/NotFound/NotFound';


export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/pets/:id" element={<PetDetails />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}















