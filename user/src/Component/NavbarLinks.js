import React from 'react'
import { Link } from 'react-router-dom'

function NavbarLinks() {

    // const logout = () => {
    //     localStorage.clear();
    //     window.location.href = '/login';
    // }
    let demo = '';
    if (localStorage.length === 2) {
        demo = "Login"
    } else {
        // localStorage.clear();
        // window.location.href = '/login';
        demo = "Logout"
    }

    const handleLogout = () => {
        if(demo === "Logout") {
            localStorage.clear();
            window.location.href = '/Login';
        }else {
            window.location.href = '/Login';
        }
    }

    return (
        <div className='bg-blue-200 text-white p-3'>
            <div className='flex flex-wrap'>
                <Link to="/"><img src="/Images/logo user.png" width="55" height="55" alt="" className='mr-14 ml-5' /></Link>
                <Link to="/" className='bg-blue-900 hover:bg-blue-600 text-white  px-4 py-2 h-10 mt-1 rounded cursor-pointer mr-5 duration-300'>Home</Link>
                <Link to="/News" className='bg-blue-900 hover:bg-blue-600 text-white  px-4 py-2 h-10 mt-1 rounded cursor-pointer mr-5 duration-300'>News</Link>
                <Link to="/Fundraiser" className='bg-blue-900 hover:bg-blue-600 text-white  px-4 py-2 h-10 mt-1 rounded cursor-pointer mr-5 duration-300'>Fundraiser</Link>
                <Link to="/Stories" className='bg-blue-900 hover:bg-blue-600 text-white  px-4 py-2 h-10 mt-1 rounded cursor-pointer mr-5 duration-300'>Stories</Link>
                <Link to="/Contact" className='bg-blue-900 hover:bg-blue-600 text-white  px-4 py-2 h-10 mt-1 rounded cursor-pointer mr-5 duration-300'>Contact</Link>
            </div>
            {/* <div className='float-right relative -top-10 bg-blue-900 py-2 rounded'>
                <Link to="/Login" className=' hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer duration-300'>Login</Link>/
                <Link to="/Signup" className='hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer duration-300'>Signup</Link>
            </div> */}
            <button className=' float-right relative -top-10 bg-blue-900 py-2 px-5 hover:bg-blue-600 text-white rounded cursor-pointer duration-300' onClick={handleLogout}>{demo}</button>
        </div>
    )
}

export default NavbarLinks
