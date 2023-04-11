import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const loadedJobs = useLoaderData();
    const [details, setDetails] = useState({});
    const { id } = useParams();//it will return us the dynamic part of the Route of Details Component as like {params} while using "loader" in the declaration of the the route.
    useEffect(() => {
        const newDetails = loadedJobs.find(job => job.id == id);
        setDetails(newDetails);
    }, [loadedJobs]);
    const { salary, job_title, phone, email, address, work_spec, desc, experience, requirements } = details;
    return (
        <main>
            <h1 className="mb-20 bg-[#f9f9ff] h-[200px] text-center leading-[200px] font-extrabold text-4xl bg-[url('/src/images/vector.png')] bg-no-repeat bg-[length:220px_150px] bg-[-1%_100%]">Job Details</h1>
            <section className='container mx-auto lg:px-10 grid grid-cols-1 md:grid-cols-5 gap-4 mb-20'>
                <div className='col-span-3'>
                    <div>
                        <p className='text-[32px] text-lg leading-[32px] mb-3'><strong>Job Description: </strong><span className='text-[#757575]'>{desc}</span></p>
                    </div>
                    <div>
                        <p className='text-[32px] text-lg leading-[32px] mb-3'><strong>Job Responsibility: </strong> <span className='text-[#757575]'>{work_spec}</span></p>
                    </div>
                    <div>
                        <p className='text-[32px] text-lg leading-[32px] mb-3'><strong>Educational Requirements</strong></p>
                        <p className='text-[32px] text-lg leading-[32px] mb-3 text-[#757575]'>{requirements}</p>
                    </div>
                    <div>
                        <p className='text-[32px] text-lg leading-[32px] mb-3'><strong>Experiences: </strong></p>
                        <p className='text-[32px] text-lg leading-[32px] mb-3 text-[#757575]'>{experience}</p>
                    </div>
                </div>
                <div className='p-7 rounded-md col-span-2 w-[70%] mx-auto bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A]'>
                    <div>
                        <div className='divide-y divide-slate-500 mb-8'>
                            <h3 className='font-extrabold text-[20px] mb-3'>Job Details</h3>
                            <div className='pt-3'>
                                <p className='mb-2 items-start flex gap-1 text-[#757575] font-medium text-lg'><img src="/src/images/icons/dollar.png" alt="" /><span>Salary: {salary}</span></p>
                                <p className='mb-2 items-start flex gap-1 text-[#757575] font-medium text-lg'><img src="/src/images/icons/calendar.png" alt="" /><span>Job Title: {job_title}</span></p>
                            </div>
                        </div>
                        <div className='divide-y divide-slate-500 mb-8'>
                            <h3 className='font-extrabold text-[20px] mb-3'>Contact Info</h3>
                            <div className='pt-3'>
                                <p className='mb-2 items-start flex gap-1 text-[#757575] font-medium text-lg'><img src="/src/images/icons/phone.png" alt="" /><span>Phone: {salary}</span></p>
                                <p className='mb-2 items-start flex gap-1 text-[#757575] font-medium text-lg'><img src="/src/images/icons/email.png" alt="" /><span>Email: {job_title}</span></p>
                                <p className='mb-2 flex gap-1 items-start text-[#757575] font-medium text-lg'><img src="/src/images/icons/location.png" alt="" /><span>Address: {job_title}</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='rounded-md py-5 text-white w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#3c56fd] hover:to-[#6232e7]'>Apply Now</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Details;