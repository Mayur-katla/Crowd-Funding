import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style.css';

function DataFundraiser() {
    const [fundraiserDetails, setfundraiserDetails] = useState([]);
    let count = 1;
    useEffect(() => {
        axios.get("http://localhost:4848/fundraiser")
            .then(result => setfundraiserDetails(result.data))
            .catch(err => console.log(err))
    }, [])

    const fundraiser_delete = (id) => {
        axios.delete("http://localhost:4848/fundraiser/" + id)
        window.location.href = '/DataFundraiser';
    }

    return (
        <div className='admin_data_fundraiser bg-gray-950 absolute w-full h-full text-gray-100 overflow-y-scroll'>
            <Navbar />
            <div className='absolute left-[25%] top-10 w-[70%] text-gray-950 bg-gray-100 text-center rounded-lg px-8 overflow-x-scroll'>
                <h1 className='font-bold text-4xl my-4 uppercase'>Fundraiser</h1>
                <table className='table table-auto admin_data_donator_table overflow-x-scroll'>
                    <thead>
                        <tr className='uppercase'>
                            <th>Id</th>
                            <th className='text-center p-2'>Fund Raise</th>
                            <th className='text-center p-2'>Patient Relative</th>
                            <th className='text-center p-2'>Education Qualification</th>
                            <th className='text-center p-2'>Employee Status</th>
                            <th className='text-center p-2'>Name</th>
                            <th className='text-center p-2'>Age</th>
                            <th className='text-center p-2'>Medical Condition</th>
                            <th className='text-center p-2'>Hospital Name</th>
                            <th className='text-center p-2'>Email Address</th>
                            {/* <th className='text-center p-2'>Image</th> */}
                            <th className='text-center p-2 col-span-7'>Description</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className='text-center p-2'><b>Delete</b></th>
                        </tr>
                        {fundraiserDetails.map((details) => {
                            return <tr>
                                <td className='text-center p-2'>{count++}</td>
                                <td id='amount_color' className='text-center p-2'>₹{(details.fundRaise/100).toLocaleString('en-IN')}</td>
                                <td className='text-center p-2'>{details.patientRelative}</td>
                                <td className='text-center p-2'>{details.educationQualification}</td>
                                <td className='text-center p-2'>{details.employeeStatus}</td>
                                <td className='text-center p-2'>{details.fullName}</td>
                                <td className='text-center p-2'>{details.medicalCondition}</td>
                                <td className='text-center p-2'>{details.patientAge}</td>
                                <td className='text-center p-2'>{details.hospitalName}</td>
                                <td className='text-center p-2'>{details.emailAddress}</td>
                                {/* <td className='text-center p-2'><img src="../../../user/public/uploads/" alt="" /></td> */}
                                {/* <td className='text-center p-2'><img src={details.fundImage?.substring(15)} alt="" width='250' height='180' /></td> */}
                                <td colSpan={10} className='text-center p-2'>{details.patientDescription}</td>
                                {/* <td className='text-center p-2'><Link to='/Edit_NGO'><button className='bg-green-800 hover:bg-green-500 text-white p-3 rounded cursor-pointer mr-3 duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16"> */}
                                {/* <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" /> */}
                            {/* </svg></button></Link> */}
                            {/* </td> */}

                            {
                                console.log(details.fundImage?.substring(14))
                            }
                            <td className='text-center p-2'>
                                <Link><button onClick={(e) => fundraiser_delete(details._id)} className='bg-red-700 hover:bg-red-500 text-white p-3 rounded cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg></button></Link></td>
                            </tr>
                        })
                        }
                    </thead>
                </table>
            </div>
        </div>
    )

}

export default DataFundraiser
