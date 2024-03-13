import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const admin_logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    return (
        <div className='admin_dashboard_sidebar w-[20%] bg-gray-200 h-[100%] rounded-r-3xl position-fixed'>
            <Link to='/Home'><img src="/Images/logo admin.png" alt="" width='120' height='120' className='relative left-[32%] top-5' /></Link>
            <div className='flex flex-col text-gray-800 mt-16 text-center'>
                <Link to='/DataFundraiser' className='bg-gray-950 w-[60%] hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 mb-4 duration-300'>Fundraiser</Link>
                <Link to='/DataDonator' className='bg-gray-950 w-[60%] hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 mb-4 duration-300'>Donator</Link>
                <Link to='/DataNGO' className='bg-gray-950 w-[60%] hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 mb-4 duration-300'>NGO</Link>
                <Link to='/DataNews' className='bg-gray-950 w-[60%] hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 mb-4 duration-300'>News</Link>
                <Link to='/DataStories' className='bg-gray-950 w-[60%] hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 mb-4 duration-300'>Stories</Link>
                <Link to='/DataContact' className='bg-gray-950 w-[60%] hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 mb-4 duration-300'>Contact</Link>
                <button onClick={admin_logout} className='bg-gray-950 w-[60%] hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 mb-4 duration-300'>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
