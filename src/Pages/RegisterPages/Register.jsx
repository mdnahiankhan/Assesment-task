import React from 'react';
import { Link } from 'react-router-dom';
import photo from "../../assets/Picture.png"
import logo from "../../assets/Logo.png"
import "../../../src/Style/style.css"
const Register = () => {
    return (
        <div className='p-6 bg-base-900 grid grid-cols-3 tablet:grid-cols-3  laptop:grid-cols-3 desktop:grid-cols-3 gap-4'>
            <div className='grid laptop:grid-cols-2 desktop:grid-cols-2 shadow rounded-xl p-4 bg-white'>
                <div className="w-full max-w-lg rounded-md sm:p-8 dark:text-gray-900  p-4">
                    <div className="mb-14">
                        <img src={logo} alt="" />
                    </div>
                    <form className="space-y-2">
                        <h1 className='text-lg font-bold'>Wellcome to <br /> SystemPackage</h1>
                        <div>
                            <input type="text" required name='email' placeholder="enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-900 focus:dark:border-violet-400" />
                        </div>
                        <div>
                            <input type="password" required name='password' placeholder="enter your password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-900 focus:dark:border-violet-400" />
                        </div>
                        <button className='w-full px-8 py-3 font-semibold rounded-md text-white dark:bg-blue-600 '>Next</button>
                    </form>
                    <div className='mt-6 '>
                        <p>Not member? <Link className='text-primary'>Create Account</Link></p>
                    </div>
                </div>
                <img className='hidden laptop:block desktop:block' src={photo} alt="" />
            </div>
            <div className=' grid laptop:grid-cols-2  desktop:grid-cols-2 shadow rounded-xl p-4 bg-white'  >
                <div className="w-full max-w-desktop rounded-md sm:p-8 dark:text-gray-900 p-4">
                    <div className="mb-14 ">
                        <img src={logo} alt="" />
                    </div>
                    <form className="space-y-2">
                        <h1 className='text-lg font-bold'>Entere the verification <br /> code to continue.</h1>
                        <p className='text-sm tablet:p-2'>We sent to <span className='text-blue-700 font-semibold'>hellouser@gmail.com</span> .If you dont see it, check your spam.</p>
                        <div className='flex justify-start'>
                            {/* <img className='w-8 h-8' src={input} alt="" /> */}
                            <input type="text" placeholder="Type here" className="input text-black input-bordered  w-2 max-w-xs mr-2" />
                            <input type="text" placeholder="Type here" className="input text-black input-bordered  w-2 max-w-xs mr-2" />
                            <input type="text" placeholder="Type here" className="input text-black input-bordered  w-2 max-w-xs mr-2" />
                            <input type="text" placeholder="Type here" className="input text-black input-bordered  w-2 max-w-xs mr-2" />
                            <input type="text" placeholder="Type here" className="input text-black input-bordered  w-2 max-w-xs mr-2" />
                            <input type="text" placeholder="Type here" className="input text-black input-bordered  w-2 max-w-xs mr-2" />

                        </div>
                        <div className='flex justify-around'>
                            <div>
                                <p className='text-blue-600 btn btn-ghost btn-xs font-bold
                                '>Back</p>
                            </div>
                            <div>
                                <p className='text-gray-300 font-bold btn btn-ghost btn-xs'>Resend 00:10</p>
                            </div>
                        </div>
                    </form>
                    <div className='mt-6 absolute'>
                        <p>Not member? <Link className='text-primary'>Create Account</Link></p>
                    </div>
                </div>
                <img className='hidden laptop:block desktop:block' src={photo} alt="" />
            </div>
            <div className=' shadow rounded-xl p-4 bg-white'  >
                <div className="">
                    <div className=" absolute logo desktop:top-60 right-60 tablet:top-7 right-10 ">
                        <img src={logo} alt="" />
                        <p className='text-blue-600 font-bold -ml-4'>Success!</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;