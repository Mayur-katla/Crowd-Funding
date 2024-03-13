import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';

function DataNGO() {
    const [NGOdata, setNGOdata] = useState([]);
    let count = 1;
    useEffect(() => {
        axios.get("http://localhost:4848/ngo")
            .then(result => setNGOdata(result.data))
            .catch(err => console.log(err))
    }, [])

    const NGO_delete = (id) => {
        axios.delete("http://localhost:4848/ngo/" + id)
            .then(result => {
                console.log(result)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='admin_data_ngo bg-gray-950 absolute w-full overflow-y-scroll h-full text-gray-100'>
            <Navbar />
            <div className='absolute left-[25%] top-10 w-[70%] text-gray-950 bg-gray-100 text-center rounded-lg px-8 overflow-x-scroll '>
                <h1 className='font-bold text-4xl my-5 uppercase'>Non-governmental organization (NGO)</h1>
                <table className='table table-auto admin_data_donator_table'>
                    <thead>
                        <tr className='uppercase'>
                            <th className='text-center p-3 text-sm'>Registered Non Profit</th>
                            <th className='text-center p-3 text-sm'>Organization Name</th>
                            <th className='text-center p-3 text-sm'>Registered Address</th>
                            <th className='text-center p-3 text-sm'>Cause Supported</th>
                            <th className='text-center p-3 text-sm'>Founder Name</th>
                            <th className='text-center p-3 text-sm'>Name</th>
                            <th className='text-center p-3 text-sm'>Phone Number</th>
                            <th className='text-center p-3 text-sm'>Email Id</th>
                            <th className='text-center p-3 text-sm'>Designation / Role</th>
                            <th className='text-center p-3 text-sm'>Certification 80G</th>
                            <th className='text-center p-3 text-sm'>Certification FCRA</th>
                            <th className='text-center p-3 text-sm'>Website URL</th>
                            <th className='text-center p-3 text-sm'>Year Budget</th>
                            <th className='text-center p-3 text-sm'>Total Donor</th>
                            <th className='text-center p-3 text-sm'>Total Employee</th>
                            <th className='text-center p-3 text-sm'>Crowd Funded Before</th>
                            <th className='text-center p-3 text-sm'>About Your NGO</th>
                            <th className='text-center p-3 text-sm'><b className='mr-2 text-center'>Edit</b></th>
                            <th className='text-center p-3 text-sm'><b className='mr-2 text-center'>Delete</b></th>
                        </tr>
                        {
                            NGOdata.map((result) => {
                                return <tr>
                                    <td className='text-center'>{count++}</td>
                                    <td className='text-center p-2'>{result.registeredNonProfit}</td>
                                    <td className='text-center p-2'>{result.orgName}</td>
                                    <td className='text-center p-2'>{result.registeredAddress}</td>
                                    <td className='text-center p-2'>{result.causeSupported}</td>
                                    <td className='text-center p-2'>{result.founderName}</td>
                                    <td className='text-center p-2'>{result.name}</td>
                                    <td className='text-center p-2'>{result.phoneNumber}</td>
                                    <td className='text-center p-2'>{result.emailId}</td>
                                    <td className='text-center p-2'>{result.designationRole}</td>
                                    <td className='text-center p-2'>{result.cer80G}</td>
                                    <td className='text-center p-2'>{result.cerFCRA}</td>
                                    <td className='text-center p-2'>{result.webURL}</td>
                                    <td className='text-center p-2'>{result.yearBudget}</td>
                                    <td className='text-center p-2'>{result.totalDonor}</td>
                                    <td className='text-center p-2'>{result.totalEmployee}</td>
                                    <td className='text-center p-2'>{result.crowdfundedBefore}</td>
                                    <td className='text-center p-2'>{result.NGOdescription}</td>
                                    <td className='text-center p-2'><Link className='-ml-36' to='/Edit_NGO'><button className='bg-green-800 hover:bg-green-500 text-white p-3 rounded cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                    </svg></button></Link>
                                    </td>
                                    <td className='text-center p-2'>
                                        <button onClick={() => NGO_delete(result._id)} className='bg-red-700 hover:bg-red-500 text-white p-3 rounded cursor-pointer duration-300 -ml-24'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                        </svg></button></td>
                                </tr>
                            })
                        }
                    </thead>
                </table>
            </div>
        </div>
    )

}

export default DataNGO
