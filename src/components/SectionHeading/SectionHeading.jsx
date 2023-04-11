import React from 'react';

const SectionHeading = ({title,desc}) => {
    return (
        <>
            <h1 className='font-extrabold text-[48px] text-center font-sans mb-2'>{title}</h1>
            <p className='text-[#757575] font-medium text-center mb-[70px]'>{desc}</p>
        </>
    );
};

export default SectionHeading;