import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Attendance from "./pages/Attendance";
import Error from "./pages/Error";


// File is not to be touched, this is the entry point for the website.

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// CHANGE ALL ROUTES HERE
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/" element={<App />} />
                <Route path="/attendance/handleError" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
