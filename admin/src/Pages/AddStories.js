import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../Component/Navbar';

function AddStories() {
    const [storiesImage, setstoriesImage] = useState([]);
    const [storiesName, setstoriesName] = useState('');
    const [storiesDescription, setstoriesDescription] = useState('');

    const storiesSubmit = async () => {
        const formData = new FormData();
        formData.append('storiesImage', storiesImage);
        formData.append('storiesName', storiesName);
        formData.append('storiesDescription', storiesDescription);
        try {
            const response = await axios.post("http://localhost:4848/stories", formData, {
                Headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            alert("Inserted Successfully Stories...");
            window.location.href = "/DataStories";
            console.log(response.data);
        } catch (e) {
            if (e.response.status === 400) {
                alert("Fundraiser Success Stories already exists...");
            }
            console.log(e);
        }
    }

    return (
        <div className='crowd_signup bg-gray-950 absolute w-full h-full'>
            <Navbar />
            <div className='crowd_signup_content bg-gray-200 p-4 w-[40%] absolute left-[30%] top-20 ml-20 rounded-xl '>
                <h1 className='text-gray-800 text-4xl text-center m-4 my-1 font-semibold uppercase'>Add Success Stories</h1>
                <input type="file" onChange={(e) => setstoriesImage(e.target.files[0])} className='shadow appearance-none border-none w-3/4 p-3 text-gray-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-gray-600 rounded-md' placeholder='Enter FullName' required />
                <br />
                <input type="text" value={storiesName} onChange={(e) => setstoriesName(e.target.value)} className='shadow appearance-none border-none w-3/4 p-3 text-gray-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-gray-600 rounded-md' placeholder='News Name' required />
                <br />
                <textarea name="news_description" id="news_description" cols="30" rows="4" value={storiesDescription} onChange={(e) => setstoriesDescription(e.target.value)} className='shadow appearance-none border-none w-3/4 p-3 text-gray-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-gray-600 rounded-md' placeholder='News Description'></textarea>
                <br />
                <button onClick={storiesSubmit} className='bg-gray-500 text-white rounded hover:bg-gray-800 mx-16 my-3 px-4 py-2 cursor-pointer duration-300'>ADD</button>
            </div>
        </div>
    )
}

export default AddStories
