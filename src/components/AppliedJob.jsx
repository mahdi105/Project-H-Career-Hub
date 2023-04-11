import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    const { logo, job_title, company, type, location, salary,id } = job;
    const navigate = useNavigate()
    return (
        <div className='flex justify-between items-center border border-slate-200 p-7 rounded-md'>
            <div className='flex gap-8 items-center'>
                <div className='rounded-md bg-[#F4F4F4] w-[240px] h-[240px] flex justify-center items-center p-4'>
                    <img className='w-8/12' src={logo} alt="" />
                </div>
                <div>
                    <h3 className='font-extrabold text-2xl mb-2 text-[#474747]'>{job_title}</h3>
                    <p className='font-semibold text-[#757575] text-2xl mb-4'>{company}</p>
                    <ul className='flex gap-3 items-center mb-3'>
                        {
                            type.map((item, i) => <li className='rounded py-2 px-5 font-extrabold text-[#7E90FE] border border-[#7E90FE]' key={i}>{item}</li>)
                        }
                    </ul>
                    <div className='flex items-center gap-3 mb-6'>
                        <p className='flex gap-1 items-center text-[#757575] font-semibold text-lg'><img src="/src/images/icons/location.png" alt="" />{location}</p>
                        <p className='flex gap-1 items-center text-[#757575] font-semibold text-lg'><img src="/src/images/icons/dollar.png" alt="" /><span>Salary: {salary}</span></p>
                    </div>
                </div>
            </div>
            <button onClick={()=>navigate(`/details/${id}`)} className='py-4 px-7 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#3c56fd] hover:to-[#6232e7] text-white'>
                View Details
            </button>
        </div>
    );
};

export default AppliedJob;