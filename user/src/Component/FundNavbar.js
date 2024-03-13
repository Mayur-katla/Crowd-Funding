import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';

function FundNavbar() {
    const admin_logout = () => {
        localStorage.clear();
        window.location.href = '/Login';
    }

    const { name } = useParams();
    // console.log(name);

    return (
        <div className='admin_dashboard_sidebar w-[20%] bg-gray-200 h-[100%] rounded-r-3xl fixed'>
            <img src="/Images/logo admin.png" alt="" width='120' height='120' className='relative left-[32%] top-5' />
            <div className='flex flex-col text-gray-800 mt-20 text-center'>
                <Link to={'/FundraiserDashboard/' + name} className='bg-gray-950 w-[60%] hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 my-3 duration-300'>Fundraiser</Link>
                <Link to={'/DataDonator/' + name} className='bg-gray-950 w-[60%] hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 my-3 duration-300'>Donator</Link>
                <Link to={'/FundProfile/' + name} className='bg-gray-950 w-[60%] hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 my-3 duration-300'>Profile</Link>
                <button onClick={admin_logout} className='bg-gray-950 w-[60%] hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 my-3 duration-300'>Logout</button>
            </div>
        </div>
    )
}

export default FundNavbar
