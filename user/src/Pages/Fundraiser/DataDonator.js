import React, { useEffect, useState } from 'react'
import Navbar from '../../Component/FundNavbar';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import '../../style.css';
// import '../../css/css/bootstrap.css';

function DataDonator() {
    const [paymentDetails, setpaymentDetails] = useState([]);
    let count = 1;
    const {name} = useParams();
    console.log(name);
    useEffect(() => {
        axios.get("http://localhost:4848/onePayments/"+name)
            .then(result => setpaymentDetails(result.data))
            .catch(err => console.log(err))
    }, [name])

    const donator_delete = (id) => {
        axios.delete("http://localhost:4848/payment/" + id)
        window.location.href = '/DataDonator/'+name;
    }

    return (
        <div className='admin_dashboard bg-gray-950 absolute w-full h-full overflow-y-scroll mb-10 text-gray-100'>
            <Navbar />
            <div className='absolute left-[25%] top-10 w-[70%] text-gray-950 bg-gray-100 text-center rounded-lg px-8'>
                <h1 className='font-bold text-4xl my-3 uppercase'>Donator</h1>
                <table className='table table-striped table-auto admin_data_donator_table'>
                    <thead>
                        <tr className='uppercase'>
                            <th className='p-3 text-center'>Id</th>
                            <th className='p-3 text-center'>Amount</th>
                            <th className='p-3 text-center'>Name</th>
                            <th className='p-3 text-center'>Email</th>
                            <th className='p-3 text-center'>Mobile No</th>
                            <th className='p-3 text-center'>Address</th>
                            <th className='p-3 text-center'>Pan card</th>
                            <th className='p-3 text-center'><b>Delete</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentDetails.map((details) => {
                            return <tr>
                                <td className='p-2 text-center'>{count++}</td>
                                <td id='amount_color' className='p-2 text-center'>₹{(details.amount / 100).toLocaleString('en-IN')}</td>
                                <td className='p-2 text-center'>{details.fullname}</td>
                                <td className='p-2 text-center'>{details.email}</td>
                                <td className='p-2 text-center'>{details.mobileno}</td>
                                <td className='p-2 text-center'>{details.address}</td>
                                <td className='p-2 text-center'>{details.pancard}</td>
                                <td className='p-2 text-center'><Link><button onClick={(e) => donator_delete(details._id)} className='bg-red-700 hover:bg-red-500 text-white p-3 rounded cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg></button></Link></td>
                                <hr />
                            </tr>

                        })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default DataDonator
