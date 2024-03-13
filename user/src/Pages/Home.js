import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import jwt from 'jsonwebtoken';
import NavbarLinks from '../Component/NavbarLinks';
import Footer from '../Component/Footer';
import axios from 'axios';

function Home() {
    const [fundDetails, setfundDetails] = useState([]);
    const [totalDonationSum, settotalDonationSum] = useState(0);
    // async function demo() {
    //     const response = await fetch('http://localhost:4848/home', {
    //         headers: {
    //             'x-access-token': localStorage.getItem('token'),
    //         }
    //     })
    //     const data = response.json(demo);
    //     console.log(data);
    // }

    useEffect(() => {
        const news_data = async () => {
            try {
                const response = await axios.get("http://localhost:4848/fundraiser");
                setfundDetails(response.data);
                // console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        news_data();
    }, []);

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         const email = jwt.decode(token);
    //         if (!email) {
    //             localStorage.removeItem('token');
    //             window.location.href = '/login';
    //         } else {
    //             demo();
    //         }
    //     }
    // })

    // const logout = () => {
    //     localStorage.clear();
    //     window.location.href = '/login';
    // }
    return (
        // <div>
        //     <h1>Home</h1>
        //     <button onClick={logout}>Logout</button>
        // </div>

        <div className='crowd_home bg-blue-900 w-full h-full absolute'>
            <NavbarLinks />
            <div>
                <img src="/Images/homebackno2.png" alt="" width="500" height="450" className='crowd_home_back mt-24 ml-20' />
                <div className='crowd_home_side_content text-white'>
                    <h1 className='text-blue-100 text-6xl uppercase font-semibold'>save life</h1>
                    <h1 className='text-blue-100 text-2xl mt-3 mb-10 font-bold'>Crowdfunding</h1>
                    <p className='text-blue-100 mt-5 text-lg w-3/4'>Raise Funds online for medical issues, farmer and other causes to save a life</p>
                    <div className='flex flex-wrap'>
                        <div className='bg-blue-100 px-5 py-3 text-blue-800 rounded-xl font-sans m-5 mt-9 text-xl'>
                            <p>800,300+</p>
                            <b className='text-base uppercase'>Fundraiser</b>
                        </div>
                        <div className='bg-blue-100 px-5 py-3 text-blue-800 rounded-xl font-sans m-5 mt-9 text-xl'>
                            <p>Rs.200Cr+</p>
                            <b className='text-base uppercase'>Raised</b>
                        </div>
                        <div className='bg-blue-100 px-5 py-3 text-blue-800 rounded-xl font-sans m-5 mt-9 text-xl'>
                            <p>100L+</p>
                            <b className='text-base uppercase'>Donations</b>
                        </div>
                    </div>
                    <button className='bg-blue-600 text-white hover:bg-white hover:text-blue-950 px-4 py-2 my-5 rounded cursor-pointer duration-700'><Link to='/Signup'>Save A Life - Free Fundraiser</Link></button>
                </div>
            </div>
            <div className='crowd_home_trending_fundraiser bg-blue-200 sticky w-full h-[80%] p-5 mt-[4%]'>
                <h1 className='text-5xl font-semibold text-center mb-10 uppercase'>Emergency Fundraiser</h1>
                <div className='flex space-x-10 mx-10 justify-center overflow-hidden'>
                    {fundDetails.map((details) => {
                        return <Link className='crowd_home_trending_fundraiser_items bg-blue-600 text-white w-[25%]' to={`/FundraiserDetails/${details.fullName}`}>
                            {/* <img src="/images/h3.jpg" alt="" /> */}
                            <img src={details.fundImage?.substring(14)} alt="" className='h-52 w-full' />

                            <div className='p-3'>
                                <p className='text-center mb-5 uppercase text-xl font-bold'>{details.fullName}</p>

                                <p className='text-center font-bold'>₹{(details.fundRaise / 100).toLocaleString('en-IN')}</p>
                                <div className='flex gap-3 justify-center my-3  '>
                                    <Link to={"/payment/" + details.fullName} className='bg-blue-950 hover:bg-blue-200 text-white hover:text-blue-950 px-4 py-2 h-10 mt-1 rounded cursor-pointer mx-auto duration-500'>Donate</Link>
                                </div>
                            </div>
                        </Link>
                    })}
                </div>
            </div>
            <div className='crowd_home bg-blue-900 h-[70%] -mt-10 pt-10 text-white'>
                <h1 className='text-5xl font-semibold text-center my-5 mb-10 uppercase'>Categories</h1>
                <div className='flex justify-center flex-wrap'>
                    <Link to={`/Categories/Medical`} className='bg-blue-200 text-blue-900 hover:bg-blue-500 hover:text-blue-100 p-8 text-2xl uppercase mr-[5%] mb-10 rounded-lg duration'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-hospital" viewBox="0 0 16 16"> */}
                        {/* <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z" /> */}
                        {/* <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z" /> */}
                        {/* </svg> */}
                        <p>
                            Medical
                        </p>
                    </Link>
                    <Link to={`/Categories/Education`} className='bg-blue-200 text-blue-900 hover:bg-blue-500 hover:text-blue-100 p-8 text-2xl uppercase mr-[5%] mb-10 rounded-lg duration'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16"> */}
                        {/* <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" /> */}
                        {/* </svg> */}
                        <p>
                            Education
                        </p>
                    </Link>
                    <Link to={`/Categories/Farmer`} className='bg-blue-200 text-blue-900 hover:bg-blue-500 hover:text-blue-100 p-8 text-2xl uppercase mr-[5%] mb-10 rounded-lg duration'>
                        <p>
                            Farmer
                        </p>
                    </Link>
                    <Link to={`/Categories/Children`} className='bg-blue-200 text-blue-900 hover:bg-blue-500 hover:text-blue-100 p-8 text-2xl uppercase mr-[5%] mb-10 rounded-lg duration'>
                        <p>
                            Children
                        </p>
                    </Link>
                    <Link to={`/Categories/Animals`} className='bg-blue-200 text-blue-900 hover:bg-blue-500 hover:text-blue-100 p-8 text-2xl uppercase mr-[5%] mb-10 rounded-lg duration'>
                        <p>
                            Animals
                        </p>
                    </Link>
                    <Link to={`/Categories/Environment`} className='bg-blue-200 text-blue-900 hover:bg-blue-500 hover:text-blue-100 p-8 text-2xl uppercase mr-[5%] mb-10 rounded-lg duration'>
                        <p>
                            Environment
                        </p>
                    </Link>
                    <Link to={`/Categories/Food And Hunger`} className='bg-blue-200 text-blue-900 hover:bg-blue-500 hover:text-blue-100 p-8 text-2xl uppercase mr-[5%] mb-10 rounded-lg duration'>
                        <p>
                            Food And Hunger
                        </p>
                    </Link>
                </div>
            </div>
            <Footer>

            </Footer>
        </div>
    )
}

export default Home
