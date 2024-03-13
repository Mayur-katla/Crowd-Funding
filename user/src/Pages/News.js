import React, { useEffect, useState } from 'react';
import NavbarLinks from '../Component/NavbarLinks';
import { Link } from 'react-router-dom';
// import Footer from '../Component/Footer';
import axios from 'axios';

function Categories() {
    // const [newsModal, setnewsModal] = useState(false);
    const [newsData, setnewsData] = useState([]);

    // const newsOpen = () => {
    //     setnewsModal(true);
    // }

    // const newsClose = () => {
    //     setnewsModal(false);
    // }

    useEffect(() => {
        const news_data = async () => {
            try {
                const response = await axios.get("http://localhost:4848/news");
                setnewsData(response.data);
                // console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        news_data();
    }, []);
    return (
        <div className='crowd_cat_main'>
            <NavbarLinks />
            <div className='crowd_cat absolute w-full h-[90.4%]'>
                <h1 className='absolute left-[6%] text-blue-100 text-5xl font-semibold uppercase m-2 mb-5'>News</h1>
                <div className='absolute left-[6%] top-[11%]'>
                    <input type="text" className='border-solid border-2 border-white-900 bg-blue-100 text-blue-800 outline-none px-5 py-2 active:outline-none pr-96 rounded-xl' placeholder='Search Here...' />
                </div>
                <div className='crowd_home_trending_fundraiser w-full p-5 mt-[4%]'>
                    <div className='flex flex-row absolute left-[5%] top-[20%] flex-wrap'>
                        {/* {newsData.map(details => (

                            newsModal && (
                                <div className="modal">
                                    <div className="modal-content text-center">
                                        <h2 className='text-2xl pb-5'>{details.newsHeader}</h2>
                                        <hr />
                                        <p className='pt-4'>{details.newsDescription}</p>
                                        <br />
                                        <button onClick={newsClose} className='bg-blue-600 text-white px-4 py-2 hover:bg-blue-400 rounded-sm'>Close</button>
                                    </div>
                                </div>
                            )
                        ))}
 */}

                        <div className='crowd_home_trending_fundraiser_items flex text-white flex-wrap cursor-pointer h-[50%]'>
                            {newsData.map(details => (
                                <Link to={`/NewsDetails/${details.newsName}`} className='m-5 bg-blue-500 p-3 rounded-lg w-80'>
                                    {/* <img src="/images/n4.jpg" alt="" className='h-52 w-full' /> */}
                                    <img src={details.newsImage?.substring(14)} alt="" className='h-52 w-full' />
                                    <div className='p-3'>
                                        <h4 className='text-blue-100 text-xl uppercase text-center m-2 mb-5'>"{details.newsName}"</h4>
                                        <div className='flex justify-center my-3 ml-3'>
                                            <Link to={"/Payment/" + details.newsName} className='bg-blue-950 hover:bg-blue-200 text-white hover:text-blue-950 px-4 py-2 h-10 mt-1 rounded cursor-pointer mr-5 duration-500'>Donate</Link>
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

export default Categories
