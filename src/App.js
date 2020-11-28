import React from 'react';
import TopMenu from './components/TopMenu';
import HomePage from './pages/Home';
import CavitiesPage from './pages/Cavities';
import AppointmentsPage from './pages/Appointments';
import WhiteningPage from './pages/Whitening';
import './App.css';

function App() {
  return (
    <>
      <TopMenu />
      <HomePage />
      <CavitiesPage />
      <AppointmentsPage />
      <WhiteningPage />
    </>
  );
}

export default App;
