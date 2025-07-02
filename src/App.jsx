import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import StatsSection from './components/StatsSection/StatsSection';
import AnimalCards from './components/AnimalCards/AnimalCards';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import AboutSection from "./components/AboutSection/AboutSection";
import AdoptionForm from './components/Forms/AdoptionForm';
import DeleteAccountForm from './components/Forms/DeleteAccountForm';
import ForgotPasswordForm from './components/Forms/ForgotPasswordForm';
import FormModal from './components/Forms/FormModal';
import FoundPetForm from './components/Forms/FoundPetForm';
import LoginForm from './components/Forms/LoginForm';
import LostPetForm from './components/Forms/LostPetForm';
import Anunciar from './components/Forms/Anunciar';


const HomePage = () => (
  <main className='overflow-x-hidden'>
    <Hero />
    <AboutSection />
    <StatsSection />
    <AnimalCards />
    <ContactSection />
    <Footer />
    <FormModal />
  </main>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/perdi-meu-pet" element={<LostPetForm />} />
        <Route path="/achei-um-pet" element={<FoundPetForm />} />
        <Route path="/adotar" element={<AdoptionForm />} />
        <Route path="/deletar-conta" element={<DeleteAccountForm />} />
        <Route path="/esqueci-senha" element={<ForgotPasswordForm />} />
        <Route path="/anunciar" element={<Anunciar />} />
      </Routes>
    </Router>
  );
};

export default App;
