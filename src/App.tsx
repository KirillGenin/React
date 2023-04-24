import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import PageNotFound from './pages/404';
import FormPage from './pages/Form';
import Layout from './components/Layout';
import React from 'react';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
