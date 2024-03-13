import React, { useEffect, useState } from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
// import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    let CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const [user, setuser] = useState([]);
    const [totalNews, settotalNews] = useState();
    const [totalNgo, settotalNgo] = useState();
    const [totalFundraiser, settotalFundraiser] = useState();
    const [totalUser, settotalUser] = useState();
    const [totalDonation, settotalDonation] = useState();

    const user_delete = (id) => {
        axios.delete("http://localhost:4848/users/" + id)
        window.location.href = '/';
    }

    useEffect(() => {
        axios.get("http://localhost:4848/users")
            .then((result) => setuser(result.data))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:4848/totalNews")
            .then((result) => settotalNews(result.data))
        // .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:4848/totalNgo")
            .then((result) => settotalNgo(result.data))
        // .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:4848/totalFundraiser")
            .then((result) => settotalFundraiser(result.data))
        // .catch((err) => console.log(err))
    }, [])


    useEffect(() => {
        axios.get("http://localhost:4848/totalUser")
            .then((result) => settotalUser(result.data))
        // .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:4848/allDonation")
            .then((result) => {
                settotalDonation((result.data[0].totalDonation/100).toLocaleString('en-IN'));
                // console.log(result.data[0].totalDonation);
            })
        // .catch((err) => console.log(err))
    }, [])

    let count = 1;

    const pieChart = {
        animationEnabled: true,
        theme: "light1",
        title: {
            text: "CrowdFunding Status",
        },
        height: 330,
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",
            startAngle: -180,
            dataPoints: [
                { y: totalFundraiser, label: "Fundraiser" },
                { y: totalUser, label: "Users" },
                { y: totalNgo, label: "NGO" },
                { y: totalNews, label: "News" }
            ]
        }]
    }

    // const lineChart = {
    //     animationEnabled: true,
    //     title: {
    //         text: "Number of New Fundraiser",
    //     },
    //     axisY: {
    //         text: "Number Of Donator",
    //     },
    //     data: [{
    //         type: "spline",
    //         name: "Fundraiser",
    //         dataPoints: [
    //             { y: 55, label: "Sun" },
    //             { y: 35, label: "Mon" },
    //             { y: 75, label: "Tue" },
    //             { y: 64, label: "Wed" },
    //             { y: 62, label: "Thur" },
    //             { y: 84, label: "Fri" },
    //             { y: 22, label: "Sat" },
    //         ]
    //     },
    //     {
    //         type: "spline",
    //         name: "Donator",
    //         dataPoints: [
    //             { y: 52, label: "Sun" },
    //             { y: 75, label: "Mon" },
    //             { y: 89, label: "Tue" },
    //             { y: 91, label: "Wed" },
    //             { y: 33, label: "Thur" },
    //             { y: 82, label: "Fri" },
    //             { y: 99, label: "Sat" },
    //         ]
    //     },
    //     {
    //         type: "spline",
    //         name: "NGO",
    //         dataPoints: [
    //             { y: 44, label: "Sun" },
    //             { y: 88, label: "Mon" },
    //             { y: 55, label: "Tue" },
    //             { y: 53, label: "Wed" },
    //             { y: 99, label: "Thur" },
    //             { y: 55, label: "Fri" },
    //             { y: 93, label: "Sat" },
    //         ]
    //     }
    //     ]
    // }

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
                <h1 className='text-gray-200 text-4xl mb-2 font-semibold uppercase w-full'>Crowd Funding Total Status</h1>
                <div className='absolute top-[15%] w-[80%]'>
                    <CanvasJSChart options={pieChart} />
                </div>
                {/* <div className='absolute left-[55%] top-[40%] w-[40%] h-[45%]'>
                    <CanvasJSChart options={lineChart} />
                </div> */}

                <div className='ml-[100%] -mt-5 flex flex-warp flex-row w-full justify-between'>
                    <div className='w-full justify-between'>
                        <div className='bg-red-400 w-[80%] text-center p-7 my-8 mr-[20%] rounded-md'>
                            <p className='text-xl text-gray-900 font-semibold mb-4'>Fundraiser</p>
                            <p className='text-3xl text-gray-900 font-bold'>{totalFundraiser}</p>
                        </div>
                        <div className='bg-blue-400 w-[80%] text-center p-7 my-8 mr-[20%] rounded-md'>
                            <p className='text-xl text-gray-900 font-semibold mb-4'>Donation</p>
                            <p className='text-3xl text-gray-900 font-bold'>{totalDonation}</p>
                        </div>
                    </div>
                    <div className='w-full justify-between'>
                        <div className='bg-green-400 w-[80%] text-center p-7 my-8 mr-[20%] rounded-md'>
                            <p className='text-xl text-gray-900 font-semibold mb-4'>NGO</p>
                            <p className='text-3xl text-gray-900 font-bold'>{totalNgo}</p>
                        </div>
                        <div className='bg-yellow-400 w-[80%] text-center p-7 my-8 mr-[20%] rounded-md'>
                            <p className='text-xl text-gray-900 font-semibold mb-4'>News</p>
                            <p className='text-3xl text-gray-900 font-bold'>{totalNews}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute left-[25%] w-[70%] top-[60%] text-gray-950 bg-gray-100 text-center rounded-lg px-8'>
                <h1 className='font-bold text-4xl my-3 uppercase'>Users</h1>
                <table className='table table-striped'>
                    <thead>
                        <tr className='uppercase'>
                            <th className='p-3 text-center'>Id</th>
                            <th className='p-3 text-center'>Fund Type</th>
                            <th className='p-3 text-center'>Name</th>
                            <th className='p-3 text-center'>Email</th>
                            <th className='p-3 text-center'>Mobile No</th>
                            <th className='p-3 text-center'><b>Delete</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((details) => {
                            return <tr>
                                <td className='p-2 text-center'>{count++}</td>
                                <td className='p-2 text-center'>{details.fundType}</td>
                                <td className='p-2 text-center'>{details.fullname}</td>
                                <td className='p-2 text-center'>{details.email}</td>
                                <td className='p-2 text-center'>{details.mobileno}</td>
                                <td className='p-2 text-center'><Link><button onClick={(e) => user_delete(details._id)} className='bg-red-700 hover:bg-red-500 text-white p-3 rounded cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg></button></Link></td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )

}
export default Dashboard