import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobCard = ({job}) => {
    const {logo,job_title,company,type,location,salary,id} = job;
    const navigate = useNavigate();
    return (
        <div className='p-10 rounded-md border border-[#E8E8E8]'>
            <div className='mb-8'>
                <img src={logo} className='w-1/6 h-7' alt="" />
            </div>
            <h2 className='text-[#474747] font-extrabold text-2xl mb-2'>{job_title}</h2>
            <p className='text-[#757575] font-semibold text-[20px] mb-4'>{company}</p>
            <ul className='flex items-center gap-3 mb-4'>
                {
                    type.map((item,i) => <li className='rounded py-2 px-5 font-extrabold text-[#7E90FE] border border-[#7E90FE]' key={i}>{item}</li>)
                }
            </ul>
            <div className='flex items-center gap-3 mb-6'>
                <p className='flex gap-1 items-center text-[#757575] text-[#757575] font-semibold text-lg'><img src="/src/images/icons/location.png" alt="" />{location}</p>
                <p className='flex gap-1 items-center text-[#757575] font-semibold text-lg'><img src="/src/images/icons/dollar.png" alt="" /><span>Salary: {salary}</span></p>
            </div>
            <div>
                <button onClick={()=>navigate(`/details/${id}`)} className='py-3 px-5 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#3c56fd] hover:to-[#6232e7] text-white'>
                    View Details
                </button>
            </div>
        </div>
    );
};

export default JobCard;