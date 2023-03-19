import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../Coundtdown/Countdown';
import photo from "../../src/assets/Banner.png";
import logo from "../../src/assets/Logo.png";

const Verification = () => {
    return (
        <div className='max-w-[1440px] mx-auto p-6'>
            <Link to="/success"><div className=' flex w-10/12 gap-20 justify-center laptop:flex-auto desktop:flex-autoshadow rounded-xl p-4 bg-white'  >
                <div className="w-full max-w-desktop rounded-md sm:p-8 dark:text-gray-900 p-4">
                    <div className="mb-14 ">
                        <img src={logo} alt="" />
                    </div>
                    <form className="space-y-2 ml-24 mt-6">
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
                        <div className='flex space-x-40'>
                            <div>
                                <p className='text-blue-600 btn btn-ghost btn-xs font-bold
                                '>Back</p>
                            </div>
                            <div className='font-bold'>
                                <Countdown seconds={10}></Countdown>
                            </div>
                        </div>
                    </form>
                    <div className='mt-40 laptop:absolute'>
                        <p>Not member? <Link className='text-primary'>Create Account</Link></p>
                    </div>
                </div>
                <img className='hidden laptop:block desktop:block' src={photo} alt="" />
            </div></Link>
        </div>
    );
};

export default Verification;