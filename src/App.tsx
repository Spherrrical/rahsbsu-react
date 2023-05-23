import { Link, Route, Routes } from 'react-router-dom';
import Attendance from './pages/Attendance';

function App() {
    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-slate-900">
                <div className="flex flex-col items-center space-y-9">
                    <h1 className="text-center text-sky-400 lg:text-5xl sm:text-7xl font-circularbold">
                        The RAHS BSU website is being reconstructed.
                    </h1>
                    <h1 className="text-center text-slate-200 lg:text-3xl font-circularbook">
                        Check back later in the summer for the new website!
                    </h1>
                    <h1 className="text-center text-slate-200 lg:text-3xl sm:text-7xl font-circularbook">
                        In the meantime, check our{' '}
                        <a href="https://instagram.com/rahs_bsu" target="_blank" rel="noopener noreferrer" className="text-cyan-500  hover:text-cyan-600">
                            Instagram
                        </a>{' '}
                        for updates :)
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default App;
