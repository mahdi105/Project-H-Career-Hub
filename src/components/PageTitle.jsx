import React from 'react';

const PageTitle = ({children}) => {
    return (
        <>
            <h1 className="mb-20 bg-[#f9f9ff] h-[200px] text-center pt-[50px] md:pt-0 md:leading-[200px] font-extrabold text-4xl bg-[url('/src/images/vector.png')] bg-no-repeat bg-[length:220px_150px] bg-[-1%_100%]">{children}</h1>
        </>
    );
};

export default PageTitle;