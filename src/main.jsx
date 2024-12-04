import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollAnimation from "react-animate-on-scroll"; 
import 'animate.css/animate.min.css';
// import 'react-toastify/dist/ReactToastify.css';



// import 'bootstrap-icons/font/bootstrap-icons.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
