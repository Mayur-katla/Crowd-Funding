import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import '../index.css'
import '../css/Main.css'

function Signup() {
    const [fundType, setfundType] = useState('Fundraiser');
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [mobileno, setmobileno] = useState('');

    localStorage.setItem("fullname", fullname);

    async function signupSubmit(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4848/user_signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                fundType, fullname, email, password, mobileno
            })
        });
        const data = await response.json();

        if (data) {
            if (fundType === "Fundraiser") {
                // console.log(data);
                window.location.href = '/AddFundraiser';
            } else if (fundType === "NGO") {
                // console.log(data);
                window.location.href = '/AddNGO';
            }
        } else {
            alert("Email should be unique");
        }
        console.log(data);
    }

    return (
        <div className='crowd_signup bg-blue-950 absolute w-full h-full'>
            <div className='crowd_signup_content bg-blue-100 p-4 w-[40%] absolute left-[25%] top-14 h-[75vh] ml-20 rounded-xl '>
                <h1 className='text-blue-800 text-4xl text-center m-4 mb-5 font-semibold uppercase'>Signup</h1>

                <form onSubmit={signupSubmit}>
                    <select name="type" value={fundType} className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' id="" onChange={(e) => setfundType(e.target.value)} required>
                        <option value={"Fundraiser"}>Fundraiser</option>
                        <option value={"NGO"}>NGO</option>
                    </select>
                    <br />
                    <input type="text" name="signup_fullname" id="signup_fullname" className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' placeholder='Enter FullName' value={fullname} onChange={(e) => setfullname(e.target.value)} required />
                    <br />
                    <input type="email" name="signup_email" id="signup_email" placeholder='Enter Email' className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={email} onChange={(e) => setemail(e.target.value)} required />
                    <br />
                    <input type="password" name="signup_password" id="signup_password" placeholder='Enter Password' className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={password} onChange={(e) => setpassword(e.target.value)} required />
                    <br />
                    <input type="text" name="signup_mobileNo" id="signup_mobileNo" placeholder='Enter Mobile No' className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={mobileno} onChange={(e) => setmobileno(e.target.value)} required />
                    <br />
                    <input type="submit" name="submit" id="submit" className='bg-blue-500 text-white rounded hover:bg-blue-800 mx-16 my-3 px-4 py-2 cursor-pointer duration-300' />
                </form>

                {/* <p className='text-sm text-blue-950 text-center mt-4'>Already have an account? <Link to="/Login" className='text-blue-600 hover:underline'>Login Here</Link></p> */}
            </div>
            {/* <p className='text-sm text-white text-center mt-4 absolute top-[83%] left-[44%]'>Are you an NGO? <Link to="/NGO_Signup" className='text-blue-300 hover:underline'>Apply Here</Link></p> */}
        </div>
    )
}

export default Signup
