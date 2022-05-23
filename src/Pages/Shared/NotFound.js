import React from 'react';
import notFound from '../../assets/images/not-found.jpg';

const NotFound = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <img className='w-full md:w-1/3' src={notFound} alt="" />
            <div>
                <h2 className='text-5xl text-primary font-bold text-center'>Oops!</h2>
                <p className='text-slate-600 text-xl text-center my-3'>The page you are looking for is unavailable</p>
            </div>
        </div>
    );
};

export default NotFound;