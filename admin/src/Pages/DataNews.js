import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar';

function DataNews() {
    const [newsData, setnewsData] = useState([]);
    let count = 1;
    useEffect(() => {
        axios.get("http://localhost:4848/news")
            .then(result => setnewsData(result.data))
            .catch(err => console.log(err))
    }, [])

    const deleteNews = (id) => {
        axios.delete("http://localhost:4848/news/" + id)
        window.location.href = "/DataNews";
    }

    return (
        <div className='admin_dashboard bg-gray-950 absolute w-full h-full overflow-y-scroll mb-10 text-gray-100'>
            <Navbar />
            <div className='absolute left-[22%] w-[75%] top-5 text-gray-950 bg-gray-100 text-center rounded-lg px-8'>
                <h1 className='font-bold text-4xl my-3 uppercase'>News Data</h1>
                <b className='float-right -mt-10 mb-4'><Link to='/AddNews' className='btn btn-success'>ADD NEWS</Link></b>
                <table className='table table-striped table-auto admin_data_donator_table rounded-lg'>
                    <thead>
                        <tr className='uppercase'>
                            <th className='p-3 text-center'>Id</th>
                            {/* <th className='p-3 text-center'>Image</th>
                            <th></th>
                            <th></th> */}
                            <th className='p-3 text-center'>Name</th>
                            <th className='p-3 text-center'>Header</th>
                            <th className='p-3 text-center'>Description</th>
                            <th className='p-3 text-center'>Time</th>
                            <th className='p-3 text-center'>Date</th>
                            <th className='p-3 text-center'><b>Delete</b></th>
                        </tr>
                        {newsData.map((details) => {
                            return <tr>
                                <td className='p-2 text-center'>{count++}</td>
                                {/* <td colSpan={3} className='p-2 text-center'><img src={details.newsImage?.substring(15)} alt="" width='250' height='180' /></td> */}
                                <td className='p-2 text-center'>{details.newsName}</td>
                                <td className='p-2 text-center'>{details.newsHeader}</td>
                                <td className='p-2 text-center'>{details.newsDescription}</td>
                                <td className='p-2 text-center'>{details.newsTime}</td>
                                <td className='p-2 text-center'>{details.newsDate}</td>
                                <td className='p-2 text-center'><Link><button onClick={(e) => deleteNews(details._id)} className='bg-red-700 hover:bg-red-500 text-white p-3 rounded cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg></button></Link></td>
                            </tr>
                        })}
                    </thead>
                </table>
            </div>
        </div >
    )
}

export default DataNews
