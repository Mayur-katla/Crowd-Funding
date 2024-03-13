import React, { useEffect, useState } from 'react'
import NavbarLinks from '../Component/NavbarLinks'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'
import '../style.css';

function NewsDetails() {
    const { name } = useParams();
    const [totalDonation, settotalDonation] = useState(0);
    const [totalDonationSum, settotalDonationSum] = useState(0);
    const [countDonator, setcountDonator] = useState(0);
    const [newsDescription, setnewsDescription] = useState([]);
    const [fundContributors, setfundContributors] = useState([]);
    let count = 1;

    useEffect(() => {
        const fetch1 = async () => {
            try {
                const response = await axios.get(`http://localhost:4848/fundContributor/${name}`);
                setfundContributors(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        const fetch2 = async () => {
            try {
                const response = await axios.get(`http://localhost:4848/newsDescription/${name}`);
                setnewsDescription(response.data[0]);
                // console.log(response.data[0]);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        const fetch3 = async () => {
            try {
                const response = await axios.get(`http://localhost:4848/totalDonation/${name}`);
                settotalDonationSum(response.data[0].total / 100);
                settotalDonation(totalDonationSum);
            } catch (error) {
                // console.error('Error:', error);
            }
        };

        const fetch4 = async () => {
            try {
                const response = await axios.get(`http://localhost:4848/DonatorCount/${name}`);
                setcountDonator(response.data[0].count);
            } catch (error) {
                // console.error('Error:', error);
            }
        };

        fetch1();
        fetch2();
        fetch3();
        fetch4();
    }, [totalDonationSum, countDonator, name]);


    return (
        <div className='crowd_fundraiser w-full h-full absolute'>
            <NavbarLinks />
            <div className='px-10 py-4'>
                <div className='flex'>
                    {/* {fundDetails.map((details) => {
                    // console.log(details.fundImage?.substring(14));
                    return <img src={details.fundImage?.substring(14)} alt="" className='ml-[5%] mt-10 h-[50%]' />
                })} */}
                    {/* <img src="/Images/h6.jpg" alt="" width='600' className='ml-[5%] mt-10 h-[50%]' /> */}
                    <div className='w-[45%]'>
                        <img src={newsDescription.newsImage?.substring(14)} alt="" className='ml-[5%] mt-10 h-96 w-[100%]' />
                        {console.log(newsDescription.newsImage?.substring(14))}
                    </div>

                    <div className='ml-[5%] mt-10'>
                        <div className='crowd_footer_total bg-red-600 w-[100%] text-center px-10 py-3 my-8'>
                            <p className='text-xl text-white my-2 font-semibold'>Total Donation</p>
                            <p className='text-3xl text-white my-2 font-bold'>₹{(totalDonation).toLocaleString('en-IN')}</p>
                        </div>
                        <div className='crowd_footer_total bg-green-600 w-[100%] text-center px-10 py-3 my-8'>
                            <p className='text-xl text-white my-2 font-semibold'>Total Donator</p>
                            <p className='text-3xl text-white my-2 font-bold'>{countDonator}</p>
                        </div>
                        <Link to={"/Payment/" + newsDescription.newsName}>
                            <div className='crowd_footer_total bg-black text-white hover:bg-gray-700 duration-200 w-[100%] text-center px-10 py-3 my-8'>
                                DONATE
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div className='flex flex-col bg-white text-blue-900 mt-10 px-6 py-2 w-[100%] ml-[30%] rounded-lg'>
                            <h1 className='uppercase text-2xl p-4 text-center font-bold px-20'>Contributor</h1>
                            {fundContributors.map((details) => {
                                return <span className='my-2 text-lg px-5'><b>{`${count++}.`} {details.fullname}</b> <p className='float-right' id='amount_color'>₹{(details.amount / 100).toLocaleString('en-IN')}</p></span>
                            })}
                        </div>
                    </div>
                </div>
                {/* <div>
                    <Link className='bg-green-800 text-white hover:bg-green-600 hover:text-white px-4 py-2 my-5 absolute left-[30%] top-[75%] rounded cursor-pointer duration-700 ' to={"/Payment/" + newsDescription.newsName}>Donate</Link>
                </div> */}

                <br />
                <br />

                <div className='crowd_fundraiser_description relative left-12 -top-5 bg-blue-200 text-blue-900 w-[60%] px-6 py-4 rounded-lg'>

                    <h1 className='uppercase text-2xl p-4 text-center font-bold '>{newsDescription.newsName}</h1>
                    <p>
                        {newsDescription.newsDescription}
                    </p>

                </div>
            </div>
        </div>
    )

}

export default NewsDetails
