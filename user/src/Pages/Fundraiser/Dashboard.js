import React, { useEffect, useState } from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
import Navbar from '../../Component/FundNavbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    const { name } = useParams();
    const [totalDonation, settotalDonation] = useState();
    const [totalFund, settotalFund] =   useState();
    const [countDonator, setcountDonator] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4848/totalDonation/${name}`);
                // settotalDonationSum();
                settotalDonation(response.data[0].total / 100);
                // console.log  (response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4848/totalFundRaiser/${name}`);
                settotalFund(response.data.fundRaise / 100);
                // console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4848/DonatorCount/${name}`);
                setcountDonator(response.data[0].count);
                // console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    });

    useEffect(() => {
        const congrats = async () => {
            try {
                if (totalDonation > totalFund) {
                    window.location.href = "/";
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };
        congrats();
    })

    let CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const pieChart = {
        animationEnabled: true,
        theme: "light1",
        title: {
            text: "CrowdFunding Status",
        },
        height: 450,
        width: 600,
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",
            startAngle: -180,
            dataPoints: [
                { y: totalDonation, label: "Total Donation" },
                { y: (totalFund - totalDonation), label: "Remaining Amount" },
            ]
        }]
    }

    return (
        <div className='admin_dashboard bg-gray-900 absolute w-full h-[100%] overflow-y-scroll text-gray-100'>
            {/* <div className='admin_dashboard_sidebar w-[20%] bg-gray-200 h-[100%] rounded-r-3xl'>
                <img src="/Images/homeicondark.png" alt="" width='100' height='100' className='relative left-[32%] top-5' />
                <div className='flex flex-col text-gray-800 mt-20 text-center'>
                    <Link to='/Data_Fundraiser' className='bg-gray-950 hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 my-3 duration-300'>Fundraiser</Link>
                    <Link to='/Data_Donator' className='bg-gray-950 hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 my-3 duration-300'>Donator</Link>
                    <Link to='/Data_NGO' className='bg-gray-950 hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 my-3 duration-300'>NGO</Link>
                <Link to='/Contact_details' className='bg-gray-950 hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer mx-16 my-3 duration-300'>Contact / Feedback</Link>
                </div>
            </div> */}
            <Navbar />
            <div className='absolute left-[25%] top-[2%]'>
                <h1 className='text-gray-200 text-4xl mb-2 font-semibold uppercase w-full'>Fundraiser Donation Status</h1>
                <div className='absolute top-[15%] w-[80%]'>
                    <CanvasJSChart options={pieChart} />
                </div>
                {/* <div className='absolute left-[55%] top-[40%] w-[40%] h-[45%]'>
                    <CanvasJSChart options={lineChart} />
                </div> */}

                <div className='ml-[100%] mt-10 flex flex-warp flex-row w-full justify-between'>
                    <div className='w-full justify-between '>
                        <div className='bg-red-400 w-[70%] text-center p-7 my-8 mr-[20%] ml-[20%] rounded-md'>
                            <p className='text-xl text-gray-900 font-semibold mb-4'>Total Donation</p>
                            <p className='text-3xl text-gray-900 font-bold'>{totalDonation}</p>
                        </div>
                        <div className='bg-green-400 w-[70%] text-center p-7 my-8 mr-[20%] ml-[20%] rounded-md'>
                            <p className='text-xl text-gray-900 font-semibold mb-4'>Total Contributor</p>
                            <p className='text-3xl text-gray-900 font-bold'>{countDonator}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Dashboard