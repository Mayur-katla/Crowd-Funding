import React from 'react';
import { Link } from 'react-router-dom';

function Thankyou() {
    return (
        <div className='bg-black absolute w-[100%] h-[100%] '>
            <div className='absolute left-[30%] top-[35%] text-center'>
                <Link to={'/'} className='bg-blue-900 text-white hover:bg-blue-500 px-6 py-2 rounded-sm duration-300'>HOME</Link>
                <h1 className=' text-white text-9xl uppercase mt-6'>Thank You</h1>
            </div>
        </div>
    )
}

export default Thankyou
