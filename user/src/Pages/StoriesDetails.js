import React, { useEffect, useState } from 'react'
import NavbarLinks from '../Component/NavbarLinks'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import '../style.css';

function StoriesDetails() {
    const { name } = useParams();
    const [totalDonation, settotalDonation] = useState(0);
    const [countDonator, setcountDonator] = useState(0);
    const [storiesDetails, setstoriesDetails] = useState([]);
    // let count = 1;
    // console.log(name);

    useEffect(() => {
        const fetch1 = async () => {
            try {
                const response = await axios.get(`http://localhost:4848/storiesDescription/${name}`);
                setstoriesDetails(response.data[0]);
                // console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        const fetch2 = async () => {
            try {
                const response = await axios.get(`http://localhost:4848/totalDonation/${name}`);
                settotalDonation(response.data[0].total / 100);
                // settotalDonation(totalDonationSum);
            } catch (error) {
                // console.error('Error:', error);
            }
        };

        const fetch3 = async () => {
            try {
                const response = await axios.get(`http://localhost:4848/DonatorCount/${name}`);
                setcountDonator(response.data[0].count);
                // console.log(response.data);
            } catch (error) {
                // console.error('Error:', error);
            }
        };

        fetch1();
        fetch2();
        fetch3();
    }, [, storiesDetails, name]);


        
  

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
                        <img src={storiesDetails.storiesImage?.substring(14)} alt="" className='ml-[5%] mt-10 h-96 w-[100%]' />
                    </div>
                    <div>
                        <div className='flex flex-col bg-white text-green-700 mt-10 px-6 py-2 w-[90%] ml-[15%] rounded-lg'>
                            <h1 className='uppercase text-4xl p-4 text-center font-bold px-20'>congratulations to {storiesDetails.storiesName}</h1>
                            <p className='text-center text-lg text-blue-900'>Total Donation - <b className='text-red-600'>₹{totalDonation}</b></p>
                            <p className='text-center text-lg mb-4 text-blue-900'>Total Contributors - <b className='text-red-600'>{countDonator}</b></p>
                            
                            <h1 className='uppercase text-2xl p-4 font-bold text-blue-900'>Story-</h1>
                            <span className='px-5 text-blue-900'>{storiesDetails.storiesDescription}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default StoriesDetails
