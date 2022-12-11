import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
/* custom Hooks and stylesheet */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.scss';
import './assets/lib/fontawesome/css/all.css';
import reportWebVitals from './reportWebVitals';

//Components
const Landing = lazy(() => import("./pages/Landing/Landing"));
const Loader = lazy(() => import("./pages/Loader/Loader"));
const Notfound = lazy(() => import("./pages/Notfound/Notfound"));
const Connexion = lazy(() => import("./pages/Auth/Connexion/Connexion"));
const Inscription = lazy(() => import("./pages/Auth/Inscription/Inscription"));
const Galerie = lazy(() => import("./pages/GalerieTemplates/GalerieTemplates"));
const Communication1 = lazy(() => import("./Templates/Communication/communication1/comm1"));
const Felicitation = lazy(() => import("./pages/Felicitation/Felicitation"));
const HomeExposant = lazy(() => import("./pages/Home/Exposant/Exposant"));
const HomeOperateur = lazy(() => import("./pages/Home/Operateur/Operateur"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={ <Loader/> }>
      <HelmetProvider>
          <Routes>
            <Route path="/" index element={<Landing/>} />
            <Route path="/Loader" element={<Loader/>} />
            <Route path='*' element={<Notfound/>} />
            <Route path='/Connexion' element={<Connexion/>} />
            <Route path='/Inscription' element={<Inscription/>} />
            <Route path='/Galerie' element={<Galerie/>} />
            <Route path="/Templates/comm1" element={<Communication1/>} />
            <Route path="/Felicitation" element={<Felicitation/>} />
            <Route path="/home/Exposant" element={<HomeExposant/>} />
            <Route path="/home/Operateur" element={<HomeOperateur/>} />
          </Routes>
      </HelmetProvider>
      </Suspense>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
