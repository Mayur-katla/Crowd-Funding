import React, { useState } from 'react'
import NavbarLinks from '../Component/NavbarLinks'
import Axios from 'axios';

function NGOSignup() {
    const [registeredNonProfit, setregisteredNonProfit] = useState();
    const [orgName, setorgName] = useState();
    const [registeredAddress, setregisteredAddress] = useState();
    const [causeSupported, setcauseSupported] = useState();
    const [founderName, setfounderName] = useState();
    const [name, setname] = useState();
    const [phoneNumber, setphoneNumber] = useState();
    const [emailId, setemailId] = useState();
    const [designationRole, setdesignationRole] = useState();
    const [cer80G, setcer80G] = useState();
    const [cerFCRA, setcerFCRA] = useState();
    const [webURL, setwebURL] = useState();
    const [yearBudget, setyearBudget] = useState();
    const [totalDonor, settotalDonor] = useState();
    const [totalEmployee, settotalEmployee] = useState();
    const [crowdfundedBefore, setcrowdfundedBefore] = useState();
    const [NGODescription, setNGODescription] = useState();

    const ngoSubmit = async (e) => {
        try {
            e.preventDefault();

            const response = await Axios.post("http://localhost:4848/add_ngo", { registeredNonProfit, orgName, registeredAddress, causeSupported, founderName, name, phoneNumber, emailId, designationRole, cer80G, cerFCRA, webURL, yearBudget, totalDonor, totalEmployee, crowdfundedBefore, NGODescription })
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='crowd_home bg-blue-900 fixed w-full h-full overflow-y-scroll'>
            <NavbarLinks />
            <div className='bg-blue-200 p-5 pl-10 mt-5 m-auto mb-10 w-[50%] rounded-lg'>
                <h1 className='text-center text-blue-950 text-4xl mb-4 font-semibold'>Non-governmental organization (NGO)</h1>
                <h2 className='text-center text-blue-950 text-2xl mb-2 font-semibold'>Application Form</h2>
                <form action="" onSubmit={ngoSubmit} className='pl-[5%] mt-10'>
                    <p className='text-blue-900 mb-1'>1. Is User organization a registered Non-profit?</p>
                    <div className='ml-5'>
                        <input type="radio" className='w-5 h-5 relative top-1' name="q1" value={"Yes"} onChange={(e => setregisteredNonProfit(e.target.value))} /><span className='p-2 text-blue-900'>Yes</span>
                        <br />
                        <input type="radio" className='w-5 h-5 relative top-1' name="q1" value={"No"} onChange={(e => setregisteredNonProfit(e.target.value))} /><span className='p-2 text-blue-900'>No</span>
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>2. Name of the Organization</p>
                    <div className='ml-5'>
                        <input type="text" name="name_of_the_organization" id="name_of_the_organization" placeholder='Organization Name' className='shadow appearance-none border-none w-[25%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' required value={orgName} onChange={(e) => setorgName(e.target.value)} />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>3. Organization's Registered Address</p>
                    <div className='ml-5'>
                        <input type="text" name="registered_address" id="registered_address" placeholder='Email Address' className='shadow appearance-none border-none w-[25%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' required value={registeredAddress} onChange={(e) => setregisteredAddress(e.target.value)} />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>4. Cause Supported (Choose Any One)</p>
                    <div className='ml-5 w-full'>
                        <div><input type="radio" className='w-5 h-5 relative top-1' value={'Medical'} onChange={(e) => setcauseSupported(e.target.value)} name="q4" /><span className='p-2 text-blue-900'>Medical</span></div>
                        <div><input type="radio" className='w-5 h-5 relative top-1' value={'Education'} onChange={(e) => setcauseSupported(e.target.value)} name="q4" /><span className='p-2 text-blue-900'>Education</span></div>
                        <div><input type="radio" className='w-5 h-5 relative top-1' value={'Farmer'} onChange={(e) => setcauseSupported(e.target.value)} name="q4" /><span className='p-2 text-blue-900'>Farmer</span></div>
                        <div><input type="radio" className='w-5 h-5 relative top-1' value={'Children'} onChange={(e) => setcauseSupported(e.target.value)} name="q4" /><span className='p-2 text-blue-900'>Children</span></div>
                        <div><input type="radio" className='w-5 h-5 relative top-1' value={'Animals'} onChange={(e) => setcauseSupported(e.target.value)} name="q4" /><span className='p-2 text-blue-900'>Animals</span></div>
                        <div><input type="radio" className='w-5 h-5 relative top-1' value={'Environment'} onChange={(e) => setcauseSupported(e.target.value)} name="q4" /><span className='p-2 text-blue-900'>Environment</span></div>
                        <div><input type="radio" className='w-5 h-5 relative top-1' value={'Food And Hunger'} onChange={(e) => setcauseSupported(e.target.value)} name="q4" /><span className='p-2 text-blue-900'>Food And Hunger</span></div>
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>5. Founder's Name</p>
                    <div className='ml-5'>
                        <input type="text" name="Founder_name" id="Founder_name" placeholder='Founder Name' className='shadow appearance-none border-none w-[25%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' required value={founderName} onChange={(e) => setfounderName(e.target.value)} />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>6. Name</p>
                    <div className='ml-5'>
                        <input type="text" name="name" id="name" placeholder='Name Here' className='shadow appearance-none border-none w-[25%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' required value={name} onChange={(e) => setname(e.target.value)} />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>7. Phone Number</p>
                    <div className='ml-5'>
                        <input type="text" name="phone_number" id="phone_number" placeholder='Phone Number' className='shadow appearance-none border-none w-[25%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' required value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>8. Email Id</p>
                    <div className='ml-5'>
                        <input type="email" name="email" id="email" placeholder='Email Here' className='shadow appearance-none border-none w-[25%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' required value={emailId} onChange={(e) => setemailId(e.target.value)} />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>9. Designation (or) Role</p>
                    <div className='ml-5'>
                        <input type="text" name="designation_role" id="designation_role" placeholder='Designation Here' className='shadow appearance-none border-none w-[25%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' required value={designationRole} onChange={(e) => setdesignationRole(e.target.value)} />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>10. Does your organization have 80G certification?</p>
                    <div className='ml-5'>
                        <input type="radio" value={'Yes'} onChange={(e) => setcer80G(e.target.value)} className='w-5 h-5 relative top-1' name="q10" /><span className='p-2 text-blue-900'>Yes</span>
                        <br />
                        <input type="radio" value={'No'} onChange={(e) => setcer80G(e.target.value)} className='w-5 h-5 relative top-1' name="q10" /><span className='p-2 text-blue-900'>No</span>
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>11. Does your organization have FCRA certification?</p>
                    <div className='ml-5'>
                        <input type="radio" value={'Yes'} onChange={(e) => setcerFCRA(e.target.value)} className='w-5 h-5 relative top-1' name="q11" /><span className='p-2 text-blue-900'>Yes</span>
                        <br />
                        <input type="radio" value={'No'} onChange={(e) => setcerFCRA(e.target.value)} className='w-5 h-5 relative top-1' name="q11" /><span className='p-2 text-blue-900'>No</span>
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>12. Website URL</p>
                    <div className='ml-5'>
                        <input type="text" name="website_url" id="website_url" placeholder='Website Url' className='shadow appearance-none border-none w-[25%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' required value={webURL} onChange={(e) => setwebURL(e.target.value)} />
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>13. Last Financial Year's Budget</p>
                    <div className='ml-5'>
                        <input type="radio" value={'0 to 10L'} onChange={(e) => setyearBudget(e.target.value)} className='w-5 h-5 relative top-1' name="q13" /><span className='p-2 text-blue-900'>0 to 10L</span>
                        <br />
                        <input type="radio" value={'10 to 25L'} onChange={(e) => setyearBudget(e.target.value)} className='w-5 h-5 relative top-1' name="q13" /><span className='p-2 text-blue-900'>10 to 25L</span>
                        <br />
                        <input type="radio" value={'25 to 50L'} onChange={(e) => setyearBudget(e.target.value)} className='w-5 h-5 relative top-1' name="q13" /><span className='p-2 text-blue-900'>25 to 50L</span>
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>14. Total Donor Database Strength</p>
                    <div className='ml-5'>
                        <input type="radio" value={'0 to 50'} onChange={(e) => settotalDonor(e.target.value)} className='w-5 h-5 relative top-1' name="q13" /><span className='p-2 text-blue-900'>0 to 50</span>
                        <br />
                        <input type="radio" value={'50 to 200'} onChange={(e) => settotalDonor(e.target.value)} className='w-5 h-5 relative top-1' name="q13" /><span className='p-2 text-blue-900'>50 to 200</span>
                        <br />
                        <input type="radio" value={'More Than 200'} onChange={(e) => settotalDonor(e.target.value)} className='w-5 h-5 relative top-1' name="q13" /><span className='p-2 text-blue-900'>More Than 200</span>
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>15. What is your organization's total employee's strength?</p>
                    <div className='ml-5'>
                        <input type="radio" value={'0 to 10'} onChange={(e) => settotalEmployee(e.target.value)} className='w-5 h-5 relative top-1' name="q14" /><span className='p-2 text-blue-900'>0 to 10</span>
                        <br />
                        <input type="radio" value={'10 to 30'} onChange={(e) => settotalEmployee(e.target.value)} className='w-5 h-5 relative top-1' name="q14" /><span className='p-2 text-blue-900'>10 to 30</span>
                        <br />
                        <input type="radio" value={'More Than 30'} onChange={(e) => settotalEmployee(e.target.value)} className='w-5 h-5 relative top-1' name="q14" /><span className='p-2 text-blue-900'>More Than 30</span>
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>16. Have you crowdfunded before?</p>
                    <div className='ml-5'>
                        <input type="radio" value={'Yes'} onChange={(e) => setcrowdfundedBefore(e.target.value)} className='w-5 h-5 relative top-1' name="q16" /><span className='p-2 text-blue-900'>Yes</span>
                        <br />
                        <input type="radio" value={'No'} onChange={(e) => setcrowdfundedBefore(e.target.value)} className='w-5 h-5 relative top-1' name="q16" /><span className='p-2 text-blue-900'>No</span>
                    </div>
                    <br />
                    <p className='text-blue-900 mb-1'>11. Patient's Description</p>
                    <div className='ml-5'>
                        <textarea name="patient_description" id="patient_description" cols="30" rows="10" placeholder="Patient's Description" className='shadow appearance-none border-none w-[90%] p-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline placeholder:text-blue-400 rounded-md' value={NGODescription} onChange={(e) => setNGODescription(e.target.value)} required></textarea>
                    </div>
                    <br />
                    <input type="submit" name="submit" id="submit" className='bg-blue-500 text-white rounded hover:bg-blue-800 relative left-[45%] my-3 px-4 py-2 cursor-pointer duration-300' />
                </form>
            </div>
        </div>
    )
}

export default NGOSignup