import React from 'react';
import { Link } from 'react-router-dom';
import photo from "../../assets/Banner.png"
import logo from "../../assets/Logo.png"
import "../../../src/Style/style.css"
const Register = () => {
    return (
        <div className='p-6 max-w-[1440px] mx-auto'>
            <div className='flex w-10/12 gap-20 justify-center laptop:flex-auto desktop:flex-auto shadow rounded-xl p-4 bg-white'>
                <div className=" w-full max-w-lg rounded-md sm:p-8 dark:text-gray-900  p-4">
                    <div className="mb-14">
                        <img src={logo} alt="" />
                    </div>
                    <form className="space-y-4 ml-24 mt-6 ">
                        <h1 className='text-lg font-bold mt-6'>Wellcome to <br /> SystemPackage</h1>
                        <div>
                            <input type="text" name='email' placeholder="enter your email" defaultValue="user@mail.com" disabled className="w-2/3 px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-900 focus:dark:border-violet-400" />
                        </div>
                        <div>
                            <input type="password" disabled name='password' defaultValue="users@gmail.com" placeholder="enter your password" className="w-2/3 px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-900 focus:dark:border-violet-400" />
                        </div>
                        <br />
                        <Link to="/verification" className='w-2/3 px-8 btn btn-info py-3 mt-6 font-semibold rounded-md text-white dark:bg-blue-600 
                         '>Next</Link>
                    </form>
                    <div className='mt-40 '>
                        <p>Not member? <Link className='text-primary'>Create Account</Link></p>
                    </div>
                </div>
                <img className='hidden laptop:block desktop:block' src={photo} alt="" />
            </div>
        </div>
    );
};

export default Register;