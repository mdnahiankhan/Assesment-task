import React from 'react';
import logo from "../../src/assets/Logo.png"
const SuccessPage = () => {
    return (
        <div className='max-w-[1440px] mx-auto p-6'>
            <div className=' shadow rounded-xl bg-white h-96'  >
                <div className=" p-4  ">
                    <div className=" absolute top-52 right-96 desktop:right-96 laptop:right-96 tablet:right-72  ">
                        <img src={logo} alt="" />
                        <p className='text-blue-600 font-bold -ml-4'>Success!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;