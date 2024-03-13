import React from 'react'
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';

function DataContact() {
    return (
        <div className='admin_data_fundraiser bg-gray-950 absolute w-full h-full text-gray-100 overflow-y-scroll'>
            <Navbar />
            <div className='absolute left-[25%] w-[70%] top-10 text-gray-950 bg-gray-100 text-center rounded-lg px-8'>
                <h1 className='font-bold text-4xl my-4 uppercase'>Contact/Feedback</h1>
                <table className='table table-auto admin_data_donator_table'>
                    <thead>
                        <tr className='uppercase'>
                            <th className='text-center p-2'>Name</th>
                            <th className='text-center p-2'>Email</th>
                            <th className='text-center p-2'>Description</th>
                            <th className='text-center p-2'><b className='mr-2 text-center'>Edit</b></th>
                            <th className='text-center p-2'><b className='mr-2 text-center'>Delete</b></th>
                        </tr>
                        <tr>
                            <td className='text-center p-2'>Joker2</td>
                            <td className='text-center p-2'>Joker2@gmail.com</td>
                            <td className='text-center p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis enim? Doloribus molestias, ullam recusandae omnis enim tempore magni, fugit laborum at quae dolorem quas laudantium voluptate nam. Non, culpa!</td>
                            <td className='text-center p-2'><Link to='/Edit_NGO'><button className='bg-green-800 hover:bg-green-500 text-white p-3 rounded cursor-pointer mr-3 duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                            </svg></button></Link>
                            </td>
                            <td className='text-center p-2'>
                                <Link><button className='bg-red-700 hover:bg-red-500 text-white p-3 rounded cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg></button></Link></td>
                        </tr>
                        <tr>
                            <td className='text-center p-2'>Joker1 </td>
                            <td className='text-center p-2'>joker1@gmail.com</td>
                            <td className='text-center p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, accusamus assumenda? Voluptatem delectus quasi tempora repellat minus fugit est deleniti. Vero voluptatem labore rerum sit odit! Et assumenda recusandae fuga?</td>
                            <td className='text-center p-2'><Link to='/Edit_NGO'><button className='bg-green-800 hover:bg-green-500 text-white p-3 rounded cursor-pointer mr-3 duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                            </svg></button></Link>
                            </td>
                            <td className='text-center p-2'>
                                <Link><button className='bg-red-700 hover:bg-red-500 text-white p-3 rounded cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg></button></Link></td>
                        </tr>
                        <tr>
                            <td className='text-center p-2'>Joker2</td>
                            <td className='text-center p-2'>Joker2@gmail.com</td>
                            <td className='text-center p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem. Assumenda reiciendis earum possimus inventore, nulla ipsam eum nostrum commodi quas iste provident, impedit fuga doloremque maiores ex saepe maxime?</td>
                            <td className='text-center p-2'><Link to='/Edit_NGO'><button className='bg-green-800 hover:bg-green-500 text-white p-3 rounded cursor-pointer mr-3 duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                            </svg></button></Link>
                            </td>
                            <td className='text-center p-2'>
                                <Link><button className='bg-red-700 hover:bg-red-500 text-white p-3 rounded cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg></button></Link></td>
                        </tr>
                        <tr>
                            <td className='text-center p-2'>Joker1 </td>
                            <td className='text-center p-2'>joker1@gmail.com</td>
                            <td className='text-center p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam veniam itaque ut eos est modi inventore corporis quod ullam! Amet sunt, laboriosam commodi alias culpa iusto quis unde eos.</td>
                            <td className='text-center p-2'><Link to='/Edit_NGO'><button className='bg-green-800 hover:bg-green-500 text-white p-3 rounded cursor-pointer mr-3 duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                            </svg></button></Link>
                            </td>
                            <td className='text-center p-2'>
                                <Link><button className='bg-red-700 hover:bg-red-500 text-white p-3 rounded cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg></button></Link></td>
                        </tr>
                        <tr>
                            <td className='text-center p-2'>Joker2</td>
                            <td className='text-center p-2'>Joker2@gmail.com</td>
                            <td className='text-center p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque pariatur quam voluptatum tenetur dolores fugit consequatur! Illo voluptas architecto soluta numquam! Atque vitae labore quae facilis molestiae magnam doloremque.</td>
                            <td className='text-center p-2'><Link to='/Edit_NGO'><button className='bg-green-800 hover:bg-green-500 text-white p-3 rounded cursor-pointer mr-3 duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                            </svg></button></Link>
                            </td>
                            <td className='text-center p-2'>
                                <Link><button className='bg-red-700 hover:bg-red-500 text-white p-3 rounded cursor-pointer duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg></button></Link></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )

}

export default DataContact
