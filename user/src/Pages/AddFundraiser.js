import React, { useState } from 'react'
import NavbarLinks from '../Component/NavbarLinks';
import axios from 'axios';

function AddFundraiser() {
    const [ catFund, setcatFund] = useState('');
    const [fundRaise, setfundRaise] = useState('');
    const [patientRelative, setpatientRelative] = useState('');
    const [educationQualification, seteducationQualification] = useState('');
    const [employeeStatus, setemployeeStatus] = useState('');
    const [fullName, setfullName] = useState('');
    const [patientAge, setpatientAge] = useState('');
    const [medicalCondition, setmedicalCondition] = useState('');
    const [hospitalName, sethospitalName] = useState('');
    const [emailAddress, setemailAddress] = useState('');
    const [fundImage, setfundImage] = useState([]);
    // const [fundDocuments, setfundDocuments] = useState([]);
    const [patientDescription, setpatientDescription] = useState('');

    const fundraiserSubmit = async (e) => {

        const formData = new FormData();

        formData.append("catFund", catFund);
        formData.append("fundRaise", fundRaise * 100);
        formData.append("patientRelative", patientRelative);
        formData.append("educationQualification", educationQualification);
        formData.append("employeeStatus", employeeStatus);
        formData.append("fullName", fullName);
        formData.append("patientAge", patientAge);
        formData.append("medicalCondition", medicalCondition);
        formData.append("hospitalName", hospitalName);
        formData.append("emailAddress", emailAddress);
        formData.append("fundImage", fundImage);
        // formData.append("fundDocuments", fundDocuments);
        formData.append("patientDescription", patientDescription);
        try {
            const response = await axios.post('http://localhost:4848/add_fundraiser', formData, {
                Headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            alert("Fundraiser Successfully Created...");
            window.location.href = `/FundraiserDashboard/${fullName}`;
            console.log(response.data);
        } catch (err) {
            if(err.response.status === 400) {
                alert("News Name already exists...");
            }
            console.log(err);
        }
    }

    return (
        <div className='crowd_add_fundraiser bg-blue-900 w-full h-full absolute overflow-y-scroll'>
            {/* <NavbarLinks /> */}
            <div className='bg-blue-200 p-5 pl-10 mt-5 mx-auto mb-10 w-[50%] rounded-lg'>
                <h1 className='text-center text-blue-950 text-4xl mb-4 font-semibold'>Add Fundraiser</h1>
                <h2 className='text-center text-blue-950 text-2xl mb-2 font-semibold'>Application Form</h2>
                {/* <form action="" onSubmit={fundraiserSubmit} > */}
                <div className='ml-5 mt-5'>
                        <select name="cat_fund" required id="cat_fund" className='p-3 rounded-md w-[90%] outline-none text-blue-900' value={catFund} onChange={(e) => setcatFund(e.target.value)}>
                            <option value="Medical">Medical</option>
                            <option value="Education">Education</option>
                            <option value="Farmer">Farmer</option>
                            <option value="Children">Children</option>
                            <option value="Animals">Animals</option>
                            <option value="Environment">Environment</option>
                            <option value="Food And Hunger">Food And Hunger</option>
                        </select>
                    </div>
                <div className='pl-[5%] mt-10'>

                    <p className='text-blue-900 mb-1'>1. How much do you want to raise?</p>
                    <div className='ml-5'>
                        <input type="text" name="fund_raise" id="fund_raise" placeholder='Enter Amount' className='shadow appearance-none border-none w-[90%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={fundRaise} onChange={(e) => setfundRaise(e.target.value)} required />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>2. The patient is my?</p>
                    <div className='ml-5'>
                        <select name="patient_relative" required id="patient_relative" className='p-3 rounded-md w-[90%] outline-none text-blue-900' value={patientRelative} onChange={(e) => setpatientRelative(e.target.value)}>
                            <option value="Mother">Mother</option>
                            <option value="Father">Father</option>
                            <option value="Brother">Brother</option>
                            <option value="Sister">Sister</option>
                            <option value="Friend">Friend</option>
                            <option value="Family Member">Family Member</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>3. Your Education Qualification?</p>
                    <div className='ml-5'>
                        <input type="text" name="education_qualification" id="education_qualification" placeholder='Enter Qualification' className='shadow appearance-none border-none w-[90%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={educationQualification} onChange={(e) => seteducationQualification(e.target.value)} required />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>4. Your Employee Status?</p>
                    <div className='ml-5'>
                        <input type="text" name="education_qualification" id="education_qualification" placeholder='Enter Qualification' className='shadow appearance-none border-none w-[90%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={employeeStatus} onChange={(e) => setemployeeStatus(e.target.value)} required />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>5. Patient's Full Name</p>
                    <div className='ml-5'>
                        <input type="text" name="patient_name" id="patient_name" placeholder='Enter Patient' className='shadow appearance-none border-none w-[90%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={fullName} onChange={(e) => setfullName(e.target.value)} required />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>6. Patient's Age</p>
                    <div className='ml-5'>
                        <input type="text" name="patient_age" id="patient_age" placeholder='Enter Patient Age' className='shadow appearance-none border-none w-[90%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={patientAge} onChange={(e) => setpatientAge(e.target.value)} required />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>7. Patient Medical Conditions?</p>
                    <div className='ml-5'>
                        <input type="text" name="medical_condition" id="medical_condition" placeholder='Enter Medical Condition' className='shadow appearance-none border-none w-[90%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={medicalCondition} onChange={(e) => setmedicalCondition(e.target.value)} required />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>8. Enter Hospital Name</p>
                    <div className='ml-5'>
                        <input type="text" name="hospital_name" id="hospital_name" placeholder='Enter Hospital Name' className='shadow appearance-none border-none w-[90%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={hospitalName} onChange={(e) => sethospitalName(e.target.value)} required />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>9. Enter Address</p>
                    <div className='ml-5'>
                        <input type="text" name="address" id="address" placeholder='Enter Address' className='shadow appearance-none border-none w-[90%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={emailAddress} onChange={(e) => setemailAddress(e.target.value)} required />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>10. Patient's Image (<b className='text-red-600 text-sm'>PNG, JPG</b>)</p>
                    <div className='ml-5'>
                        <input type="file" name="fundImage" className='shadow appearance-none border-none w-[90%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' onChange={(e) => setfundImage(e.target.files[0])} required />
                    </div>
                    {/* <br />
                    <p className='text-blue-900 mb-1'>10. Patient's Documents (<b className='text-red-600 text-sm'>PDF, DOCS</b>)</p>
                    <div className='ml-5'>
                        <input type="file" name="fundDocuments" className='shadow appearance-none border-none w-[90%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' onChange={(e) => setfundDocuments(e.target.files[0])} required />
                    </div> */}
                    <br />
                    <p className='text-blue-900 mb-1'>11. Patient's Description</p>
                    <div className='ml-5'>
                        <textarea name="patient_description" id="patient_description" cols="30" rows="10" placeholder="Patient's Description" className='shadow appearance-none border-none w-[90%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={patientDescription} onChange={(e) => setpatientDescription(e.target.value)} required></textarea>
                    </div>
                    <br />
                    {/* <input type="submit" name="submit" id="submit" className='bg-blue-500 text-white rounded hover:bg-blue-800 relative left-[45%] my-3 px-4 py-2 cursor-pointer duration-300' /> */}
                    <button onClick={fundraiserSubmit} className='bg-blue-500 text-white rounded hover:bg-blue-800 relative left-[40%] my-3 px-4 py-2 cursor-pointer duration-300'>Submit</button>
                </div>
            </div>
        </div>
    )
}


export default AddFundraiser
