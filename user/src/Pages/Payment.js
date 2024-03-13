import React, { useState } from 'react';
import axios from 'axios';
// import Razorpay from 'razorpay';
import { useParams } from 'react-router-dom';

function Payment() {
    const [receiptId, setreceiptId] = useState('');
    const [amount, setamount] = useState('');
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [mobileno, setmobileno] = useState('');
    const [address, setaddress] = useState('');
    const [pancard, setpancard] = useState('');

    const { name } = useParams();
    let donationGetter = name;

    const handlePaymentSuccess = () => {
        window.location.href = "/Thankyou";
    }

    const handlePaymentFailure = () => {
        alert("Please try again later...");
        window.location.reload();
    }
    const paymentBtn = async () => {
        try {
            const response = await axios.post("http://localhost:4848/payment/" + donationGetter, {
                donationGetter,
                amount,
                fullname,
                email,
                mobileno,
                address,
                pancard
            })
            // console.log(response.json());
            const { id } = response.data;
            setreceiptId(id);
            const options = {
                key: 'rzp_test_pemLRJEGUNGOg5',
                amount: amount * 100,
                currency: 'INR',
                name: 'Crowdfunding Community',
                description: 'Payment for your donation',
                orderId: id,
                handler: (response) => {
                    if (response.razorpay_payment_id) {
                        handlePaymentSuccess();
                    } else {
                        handlePaymentFailure();
                    }
                },
                prefill: {
                    email: email,
                    contact: mobileno,
                },
            }

            const order = new window.Razorpay(options);
            order.open();

            // console.log(order);
        } catch (error) {
            if (error.response.status === 400) {
                alert("Your Name is already exists...");
            }
            console.log(error);
        }
    }
    return (
        // <div>
        //     <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} name="amount" id="amount" />
        //         <br />
        //         <input type="text" value={fullname} onChange={(e) => setfullname(e.target.value)} name="fullname" id="fullname" />
        //         <br />
        //         <input type="email" value={email} onChange={(e) => setemail(e.target.value)} name="email" id="email" />
        //         <br />
        //         <input type="text" value={mobileno} onChange={(e) => setmobileno(e.target.value)} name="mobileno" id="mobileno" />
        //         <br />
        //         <textarea value={address} onChange={(e) => setaddress(e.target.value)} name="address" id="address" cols="30" rows="4"></textarea>
        //         <br />
        //         <input type="text" value={pancard} onChange={(e) => setpancard(e.target.value)} name="pancard" id="pancard" />
        //         <br />
        //     <button onClick={paymentBtn}>click me</button>
        // </div>

        <div className='crowd_signup bg-blue-950 absolute w-full h-full'>
            <div className='crowd_signup_content bg-blue-100 p-4 w-[40%] absolute left-[25%] top-14 ml-20 rounded-xl '>
                <h1 className='text-blue-800 text-4xl text-center m-4 mb-5 font-semibold uppercase'>Payment</h1>

                <input type="number" name="amount" id="amount" className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' placeholder='Enter Amount' value={amount} onChange={(e) => setamount(e.target.value)} required />
                <br />
                <input type="text" placeholder='Enter FullName' className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={fullname} onChange={(e) => setfullname(e.target.value)} required />
                <br />
                <input type="email" placeholder='Enter Email' className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={email} onChange={(e) => setemail(e.target.value)} required />
                <br />
                <input type="text" placeholder='Enter Mobile No' className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={mobileno} onChange={(e) => setmobileno(e.target.value)} required />
                <br />
                <input type="text" placeholder='Enter Address' className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={address} onChange={(e) => setaddress(e.target.value)} required />
                <br />
                <input type="text" placeholder='Enter Pan card' className='shadow appearance-none border-none w-3/4 p-3 text-blue-900 leading-tight mx-16 my-3 focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={pancard} onChange={(e) => setpancard(e.target.value)} required />
                <br />
                {/* <input type="submit" name="submit" id="submit" className='bg-blue-500 text-white rounded hover:bg-blue-800 mx-16 my-3 px-4 py-2 cursor-pointer duration-300' /> */}
                <button className='bg-blue-900 w-[75%] text-white rounded hover:bg-blue-600 mx-16 my-3 px-4 py-2 cursor-pointer duration-300' onClick={paymentBtn}>DONATE</button>
            </div>
        </div>

    )
}

export default Payment
