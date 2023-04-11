import React from 'react';

const JobCard = ({job, handleJobDetails}) => {
    const {logo,job_title,company,type,location,salary} = job;
    return (
        <div>
            <div>
                <img src={logo} alt="" />
            </div>
            <h2>{job_title}</h2>
            <p>{company}</p>
            <ul>
                {
                    type.map((item,i) => <li className='rounded py-2 px-5 font-extrabold text-[#7E90FE] border border-[#7E90FE]' key={i}>{item}</li>)
                }
            </ul>
            <div>
                <p><img src="../../images/icons/location.png" alt="" />{location}</p>
                <p><img src="../../images/icons/dollar.png" alt="" />{salary}</p>
            </div>
            <div>
                <button onClick={()=>handleJobDetails(job)}>
                    View Details
                </button>
            </div>
        </div>
    );
};

export default JobCard;