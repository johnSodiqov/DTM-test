import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './components/Main content/aboutPage.jsx'
import FooterPage from './components/Footer/footer';
import TestingPage from './components/Testing Page/testingPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/footer' element={<FooterPage/>}/>
          <Route path='/testingPage' element={<TestingPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
