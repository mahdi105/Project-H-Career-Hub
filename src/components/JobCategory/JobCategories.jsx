import React from 'react';

const JobCategories = ({category}) => {
    const {icon,title,jobs} = category;
    return (
        <div className='bg-[#f9f9ff] hover:bg-[#bcbcef81] transition-all duration-200 p-10 rounded-md'>
            <div className='mb-8'>
                <img src={icon} className='p-4 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-md' alt="" />
            </div>
            <h2 className='font-extrabold text-[20px] text-[#474747] mb-2'>{title}</h2>
            <p className='text-[#A3A3A3] font-medium'>{jobs} Jobs Available</p>
        </div>
    );
};

export default JobCategories;