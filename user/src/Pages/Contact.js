import React, { useState } from 'react'
import NavbarLinks from '../Component/NavbarLinks'
import axios from 'axios';

function Contact() {
    const [contact_name, setcontact_name] = useState('');
    const [contact_email, setcontact_email] = useState('');
    const [contact_description, setcontact_description] = useState('');

    const contact_form = async () => {
        const formData = new FormData();

        formData.append("contact_name", contact_name);
        formData.append("contact_email", contact_email);
        formData.append("contact_description", contact_description);

        try {
            const response = await axios.post("http://localhost:4848/contact", formData, {
                Headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            alert("Our Community will Contact in future...");
            // window.location.href = "/";
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='crowd_contact_us absolute w-full h-full'>
            <NavbarLinks />
            <img src="/Images/contact_bg.png" alt="" className='w-[50%] h-[75%] absolute left-[10%] top-[10%]' />
            <div className='crowd_contact_us_content bg-blue-200 w-[40%] relative mt-[2%] ml-[50%] py-8 px-5'>
                <h1 className='text-4xl font-semibold text-center mb-10 uppercase'>Contact Us</h1>
                <input type="text" name="contact_name" id="name" className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' placeholder='Name Here' onChange={(e) => setcontact_name(e.target.value)} />
                <br />
                <input type="email" name="contact_email" id="email" className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' placeholder='Email Here' onChange={(e) => setcontact_email(e.target.value)} />
                <br />
                <textarea name="contact_description" id="description" className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' cols="30" rows="8" placeholder='Description Here' onChange={(e) => setcontact_description(e.target.value)} ></textarea>
                <br />
                <button onClick={contact_form} className='bg-blue-500 text-white rounded hover:bg-blue-800 mx-16 my-3 px-4 py-2 cursor-pointer duration-300'>Contact</button>
            </div>
        </div>
    )
}

export default Contact
