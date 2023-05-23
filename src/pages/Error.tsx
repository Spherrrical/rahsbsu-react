import { Link, Route, Routes } from 'react-router-dom';

function Error() {
    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-slate-900">
                <div className="flex flex-col items-center space-y-9">
                    <h1 className="text-center text-sky-400 lg:text-5xl sm:text-7xl font-circularbold">
                        Looks like there was an error!
                    </h1>
                    <h1 className="text-center text-slate-200 lg:text-3xl sm:text-7xl font-circularbook">
                       There was an error recording your attendance. Record your attendance on the old form{' '}
                        <a href="https://instagram.com/rahs_bsu" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-600">
                            here
                        </a>.
                    </h1>
                    <h1 className="text-center text-slate-200 lg:text-1xl sm:text-1xl font-circularbook">
                        Error Code 403 - Unhandled Submission
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Error;
