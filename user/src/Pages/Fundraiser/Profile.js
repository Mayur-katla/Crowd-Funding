import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../Component/FundNavbar';

function Profile() {
    const [fundProfile, setfundProfile] = useState([]);
    const { name } = useParams();
    useEffect(() => {
        axios.get("http://localhost:4848/oneFundraiser/" + name)
            .then(result => {
                setfundProfile(result.data[0]);
                // console.log(result.data[0]);
            })
            .catch(err => console.log(err))
    }, [name])

    return (
        <div className='admin_dashboard bg-gray-950 absolute w-full h-full overflow-y-scroll mb-10 text-gray-100'>
            <Navbar />
            <div className='absolute left-[25%] top-10'>
                <h1 className='uppercase text-4xl font-semibold' >Fundraiser Profile</h1>
                {/* <p className='text-white'>{fundProfile.fullName}</p> */}
                <div className='w-[60%]'>
                    {/* <img src='/Images/h7.jpg' alt="" className='ml-[5%] mt-10 h-96 w-full rounded-full' /> */}
                    <img src={fundProfile.fundImage?.substring(14)} alt=""  className='ml-[5%] mt-10 h-96 w-full rounded-full' />

                </div>
                <div className='absolute left-[75%] w-[80%] h-[40%] top-[17%] text-white text-center'>
                    <p className='text-xl p-2'>Full Name : <b>{fundProfile.fullName}</b></p>
                    <p className='text-xl p-2'>Fund Raise Amount : <b>{fundProfile.fundRaise}</b></p>
                    <p className='text-xl p-2'>Patient Relative : <b>{fundProfile.patientRelative}</b></p>
                    <p className='text-xl p-2'>Qualification : <b>{fundProfile.educationQualification}</b></p>
                    <p className='text-xl p-2'>Patient Age : <b>{fundProfile.patientAge}</b></p>
                    <p className='text-xl p-2'>Medical Condition : <b>{fundProfile.MedicalCondition}</b></p>
                    <p className='text-xl p-2'>Hospital Name: <b>{fundProfile.hospitalName}</b></p>
                    <p className='text-xl p-2'>Address : <b>{fundProfile.emailAddress}</b></p>
                </div>
                <div className='absolute p-4 mt-6'>
                    <h1 className='uppercase text-xl font-semibold' >Fundraiser Description</h1>
                    <br />
                    <p className='ml-5'>{fundProfile.patientDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
