import React, { useState } from 'react';

function Login() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    async function adminloginSubmit(e) {
        try {
            e.preventDefault();

            const response = await fetch('http://localhost:4848/admin_login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    username, password
                })
            })

            const data = await response.json();
            if (data.l_admin) {
                alert("Admin Login Successfully");
                window.location.href = '/Home';
            } else {
                alert("Username or Password Incorrect!");
            }
            console.log(data);


        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        // <div>
        //     <h1>Admin Login</h1>
        //     <form onSubmit={adminloginSubmit}>
        //         <input type="username" value={username} name="username" id="username" onChange={(e) => setusername(e.target.value)} />
        //         <br />
        //         <input type="password" value={password} name="password" id="password" onChange={(e) => setpassword(e.target.value)} />
        //         <br />
        //         <input type="submit" name="submit" id="submit" />
        //     </form>
        // </div>
        <div className='crowd_signup bg-gray-950 absolute w-full h-full'>
            <div className='crowd_signup_content bg-gray-100 p-4 w-[40%] absolute left-[25%] top-28 ml-20 rounded-xl '>
                <h1 className='text-gray-800 text-4xl text-center m-4 mb-5 font-semibold uppercase'>ADMIN LOGIN</h1>

                <form onSubmit={adminloginSubmit}>
                    <input type="text" onChange={(e) => setusername(e.target.value)} className='shadow appearance-none border-none w-3/4 p-3 text-gray-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-gray-700 rounded-md' placeholder='Enter Username' value={username} required />
                    <br />
                    <input type="password" placeholder='Enter Password' className='shadow appearance-none border-none w-3/4 p-3 text-gray-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-gray-700 rounded-md' value={password} onChange={(e) => setpassword(e.target.value)} required />
                    <br />
                    <input type="submit" name="submit" id="submit" className='bg-gray-900 text-white rounded hover:bg-gray-500 mx-16 my-3 px-4 py-2 cursor-pointer duration-300' />
                </form>
            </div>
        </div>
    )
}

export default Login