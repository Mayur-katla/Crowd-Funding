import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import jwt from 'jsonwebtoken';
import '../css/Main.css';

function Login() {
    // const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    // const [fullName, setfullName] = useState('');

    const fullName = localStorage.getItem('fullName');

    async function loginSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4848/user_login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email, password
                })
            });
            const data = await response.json();
            if (!data.userData) {
                // localStorage.setItem('sample', data.loginUser)
                // alert("Login successful");
                window.location.href = `/FundraiserDashboard/${fullName}`;
            } else {
                alert("Username and email is incorrect");
                // window.location.href = '/Login';
            }
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        // <div>
        //     <h1>Login</h1>
        //     <form onSubmit={loginSubmit}>
        //         <input type="email" value={email} name="email" id="email" onChange={(e) => setemail(e.target.value)} />
        //         <br />
        //         <input type="password" value={password} name="password" id="password" onChange={(e) => setpassword(e.target.value)}/>
        //         <br />
        //         <input type="submit" name="submit" id="submit" />
        //     </form>
        // </div>

        <div className='user_login'>
            <img src="/Images/h2.avif" alt='' className='w-5/12 h-4/6' />
            <div className='user_login_content bg-blue-100 w-5/12 h-4/6'>
                <h1 className='text-blue-800 text-4xl m-4 mb-6 text-center font-semibold uppercase'>Login</h1>

                <form onSubmit={loginSubmit}>
                    <input type="email" name="login_email" id="login_email" placeholder='Enter Email' className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400' value={email} onChange={(e) => setemail(e.target.value)} />
                    <br />
                    <input type="password" name="login_password" id="login_password" placeholder='Enter Password' className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-blue-900 leading-tight mx-16 my-3 placeholder:text-blue-400' value={password} onChange={(e) => setpassword(e.target.value)} />
                    <br />
                    <input type="submit" name="submit" id="submit" value={"Login"} className='bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 rounded cursor-pointer mx-16 my-3' />
                </form>
                <p className='copyright_content text-xs text-blue-950'>By continuing you agree to our <Link to="#" className='text-blue-600 hover:underline'>Terms of Service</Link> and <Link to="#" className='text-blue-600 hover:underline'>Privacy Policy</Link></p>
                <p className='copyright_content text-xs text-blue-950 mt-2'>Want to start a fundraiser? <Link to="/Signup" className='text-blue-600 hover:underline'>Click here</Link></p>

            </div>
        </div>
    )
}

export default Login
