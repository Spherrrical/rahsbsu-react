import React, { ChangeEvent, FormEvent, useState, } from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { Switch } from "@headlessui/react";
import axios from "axios";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function Attendance() {
    const history = useNavigate();
    const [agreed, setAgreed] = useState(false);

    const submitAttendance = () => {
        history('/attendance/handleError');
    };

    return (
        <div className="isolate bg-slate-900 min-h-screen px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl font-circularbold">
                    Submit Your Attendance
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-100 font-circularbook">
                    Were you present at today's meeting? Let us know by filling out the form below.
                </p>
            </div>
            <form onSubmit={submitAttendance} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-50 font-circularbook">
                            First Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                required={true}
                                type="text"
                                name="firstName"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-slate-50 font-circularbook">
                            Last Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                required={true}
                                type="text"
                                name="lastName"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-50 font-circularbook">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-50 font-circularbook">
                            Any feedback for us?
                        </label>
                        <div className="mt-2.5">
              <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
              />
                        </div>
                    </div>
                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-emerald-600' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                <span className="sr-only">Agree to your attendance</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Switch.Label className="font-circularbook text-sm leading-6 text-gray-400">
                            By clicking this, you agree that you were present at RAHS BSU's meeting.
                        </Switch.Label>
                    </Switch.Group>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="font-circularbook block w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit Attendance
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Attendance;
