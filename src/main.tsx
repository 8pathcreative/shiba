import React from 'react';
import ReactDOM from 'react-dom/client';
import { LazyMotion, domAnimation } from "framer-motion";
import App from './App';
import './fonts/inter.css';
import './globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <App />
    </LazyMotion>
  </React.StrictMode>
);