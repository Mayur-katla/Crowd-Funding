import React, { useEffect, useState } from 'react'
import NavbarLinks from '../Component/NavbarLinks';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Fundraiser() {
    const [fundData, setfundData] = useState([]);
    const { name } = useParams();
    // const [totalDonation, settotalDonation] = useState();
    // console.log(name);
    useEffect(() => {
            const fetch1 = async () => {
                try {
                    const response = await axios.get("http://localhost:4848/fundraiser");
                    setfundData(response.data);
                    console.log(response.data);
                } catch (err) {
                    console.log(err);
                }
            }

        fetch1();
    }, []);
    return (
        <div className='crowd_cat_main'>
            <NavbarLinks />
            <div className='crowd_cat absolute w-full h-[90.4%]'>
                <h1 className='text-blue-950 font-semibold text-5xl uppercase text-center m-2 mb-5'>Fundraiser</h1>
                <div className='flex flex-col text-white ml-10 w-[100%] fixed rounded-sm'>
                    <h1 className='uppercase text-2xl p-4 text-center w-[20%] bg-blue-200 text-blue-950 font-semibold'>categories</h1>
                    <Link className='bg-blue-200 text-blue-950 px-8 py-3 hover:bg-blue-800 hover:text-blue-200 duration-300 w-[20%] text-center' to={`/Fundraiser`}><span>All Categories</span></Link>
                    <Link className='bg-blue-200 text-blue-950 px-8 py-3 hover:bg-blue-800 hover:text-blue-200 duration-300 w-[20%] text-center' to={`/Categories/Medical`}><span>Medical</span></Link>
                    <Link className='bg-blue-200 text-blue-950 px-8 py-3 hover:bg-blue-800 hover:text-blue-200 duration-300 w-[20%] text-center' to={`/Categories/Education`}><span>Education </span></Link>
                    <Link className='bg-blue-200 text-blue-950 px-8 py-3 hover:bg-blue-800 hover:text-blue-200 duration-300 w-[20%] text-center' to={`/Categories/Farmer`}><span>Farmer </span></Link>
                    <Link className='bg-blue-200 text-blue-950 px-8 py-3 hover:bg-blue-800 hover:text-blue-200 duration-300 w-[20%] text-center' to={`/Categories/Children`}><span>Children </span></Link>
                    <Link className='bg-blue-200 text-blue-950 px-8 py-3 hover:bg-blue-800 hover:text-blue-200 duration-300 w-[20%] text-center' to={`/Categories/Animals`}><span>Animals </span></Link>
                    <Link className='bg-blue-200 text-blue-950 px-8 py-3 hover:bg-blue-800 hover:text-blue-200 duration-300 w-[20%] text-center' to={`/Categories/Environment`}><span>Environment </span></Link>
                    <Link className='bg-blue-200 text-blue-950 px-8 py-3 hover:bg-blue-800 hover:text-blue-200 duration-300 w-[20%] text-center' to={`/Categories/Food And Hunger`}><span> </span></Link>
                </div>
                <div className='absolute left-[26%] top-[11%]'>
                    <input type="text" className='border-solid border-2 border-white-900 bg-transparent text-blue-200 outline-none px-5 py-2 active:outline-none pr-96 rounded-xl' placeholder='Search Here...' />
                </div>
                <div className='crowd_home_trending_fundraiser w-full p-5 mt-[4%]'>
                    <div className='flex flex-row absolute left-[25%] top-[20%]'>
                        {/* <div className='crowd_home_trending_fundraiser_items flex text-white  cursor-pointer h-[50%]'>
                        {fundData.map((details =>
                                <Link to={'/FundraiserDetails/' + details.fullName} className='m-5 bg-blue-500 p-3 rounded-lg w-80'>
                                    <img src={details.fundImage?.substring(14)} alt="" className='h-52 w-full m-2' />
                                    <div className='p-3'>
                                        <p className='text-center mb-5 text-3xl'>{details.fullName}</p>
                                        <p className='text-center text-1xl'>₹{details.fundRaise}</p>
                                        <div className='flex gap-3 justify-center my-3  '>
                                            <Link to={"/Payment/" + details.fullName} className='bg-blue-950 hover:bg-blue-200 text-white hover:text-blue-950 px-4 py-2 ml-[10%] h-10 mt-1 rounded cursor-pointer mr-5 duration-500'>Donate</Link>
                                        </div>
                                    </div> 
                                </Link>
                        ))}
                        </div> */}
                        <div className='crowd_home_trending_fundraiser_items flex text-white flex-wrap cursor-pointer h-[50%]'>
                            {fundData.map(details => (
                                <Link to={`/FundraiserDetails/${details.fullName}`} className='m-5 bg-blue-500 p-3 rounded-lg w-80'>
                                    {/* <img src="/images/n4.jpg" alt="" className='h-52 w-full' /> */}
                                    <img src={details.fundImage?.substring(14)} alt="" className='h-52 w-full' />
                                    <div className='p-3'>
                                        <h4 className='text-blue-100 text-2xl uppercase text-center m-2 mb-5'>{details.fullName}</h4>
                                        <h6 className='text-blue-100 text-lg uppercase text-center m-2 mb-5'>₹{(details.fundRaise/100).toLocaleString('en-IN')}</h6>
                                        <div className='flex justify-center my-3 ml-3'>
                                            <Link to={"/Payment/" + details.fullName} className='bg-blue-950 hover:bg-blue-200 text-white hover:text-blue-950 px-4 py-2 h-10 mt-1 rounded cursor-pointer mr-5 duration-500'>Donate</Link>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fundraiser
