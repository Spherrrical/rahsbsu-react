import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-950">
            <div className="flex flex-col items-center space-y-9">
                <h1 className="text-center text-sky-400 lg:text-5xl sm:text-7xl font-circularbold">
                    The RAHS BSU website is being reconstructed.
                </h1>
                <h1 className="text-center text-slate-200 lg:text-3xl font-circularbook">
                    We're reconstructing the website to make it more accessible and easier to navigate.
                </h1>
                <h1 className="text-center text-yellow-200 lg:text-2xl font-circularbook">
                    We are also investigating an issue where the website is unavailable on school WiFi.
                </h1>
                <h1 className="text-center text-slate-200 lg:text-3xl sm:text-7xl font-circularbook">
                    In the meantime, check our <a href="https://instagram.com/rahs_bsu" target="_blank" rel="noopener noreferrer" className="text-cyan-500 after:content-['_↑'] hover:text-cyan-600">Instagram</a>  for updates.
                </h1>
            </div>
        </div>
    );
}

export default App;
