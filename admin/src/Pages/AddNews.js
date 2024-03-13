import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../Component/Navbar';

function AddNews() {
    const [newsImage, setnewsImage] = useState([]);
    const [newsName, setnewsName] = useState('');
    const [newsHeader, setnewsHeader] = useState('');
    const [newsDescription, setnewsDescription] = useState('');
    const d = new Date();
    let newsTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    let newsDate = d.getDay() + '-' + d.getMonth() + '-' + d.getFullYear();

    const newsSubmit = async () => {
        const formData = new FormData();
        formData.append('newsImage', newsImage);
        formData.append('newsName', newsName);
        formData.append('newsHeader', newsHeader);
        formData.append('newsDescription', newsDescription);
        formData.append('newsTime', newsTime);
        formData.append('newsDate', newsDate);
        try {
            const response = await axios.post("http://localhost:4848/news", formData, {
                Headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            alert("Inserted Successfully News");
            window.location.href = "/DataNews";
            console.log(response.data);
        } catch (e) {
            if (e.response.status === 400) {
                alert("News Name already exists...");
            }
            console.log(e);
        }
    }

    return (
        // <div>
        //     <input type="file" onChange={(e) => setnewsImage(e.target.files[0])} />
        //     <br />
        //     <input type="text" name="news_name" id="news_name" value={newsName} onChange={(e) => setnewsName(e.target.value)} />
        //     <br />
        //     <input type="text" name="news_header" id="news_header" value={newsHeader} onChange={(e) => setnewsHeader(e.target.value)} />
        //     <br />
        //     <textarea name="news_description" id="news_description" cols="30" rows="4" value={newsDescription} onChange={(e) => setnewsDescription(e.target.value)}></textarea>
        //     <br />
        //     <button onClick={newsSubmit}>Add</button>
        // </div>
        <div className='crowd_signup bg-gray-950 absolute w-full h-full'>
            <Navbar />
            <div className='crowd_signup_content bg-gray-200 p-4 w-[40%] absolute left-[30%] top-20 ml-20 rounded-xl '>
                <h1 className='text-gray-800 text-4xl text-center m-4 my-1 font-semibold uppercase'>Add News</h1>
                <input type="file" onChange={(e) => setnewsImage(e.target.files[0])} className='shadow appearance-none border-none w-3/4 p-3 text-gray-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-gray-600 rounded-md' placeholder='Enter FullName' required />
                <br />
                <input type="text" value={newsName} onChange={(e) => setnewsName(e.target.value)} className='shadow appearance-none border-none w-3/4 p-3 text-gray-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-gray-600 rounded-md' placeholder='News Name' required />
                <br />
                <input type="text" placeholder='News Header' className='shadow appearance-none border-none w-3/4 p-3 text-gray-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-gray-600 rounded-md' value={newsHeader} onChange={(e) => setnewsHeader(e.target.value)} required />
                <br />
                <textarea name="news_description" id="news_description" cols="30" rows="4" value={newsDescription} onChange={(e) => setnewsDescription(e.target.value)} className='shadow appearance-none border-none w-3/4 p-3 text-gray-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-gray-600 rounded-md' placeholder='News Description'></textarea>
                <br />
                <button onClick={newsSubmit} className='bg-gray-500 text-white rounded hover:bg-gray-800 mx-16 my-3 px-4 py-2 cursor-pointer duration-300'>ADD</button>
                {/* <input type="submit" name="submit" id="submit" className='bg-gray-500 text-white rounded hover:bg-gray-800 mx-16 my-3 px-4 py-2 cursor-pointer duration-300' /> */}
            </div>
        </div>
    )
}

export default AddNews
