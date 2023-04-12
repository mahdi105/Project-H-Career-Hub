import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    const navigate = useNavigate()
    return (
        <main className='flex justify-center items-center min-h-[100vh]'>
            <section>
                <div className='flex justify-center items-center mb-8'>
                    <img style={{ width: "160px", height: "160px" }} src="/src/images/error.png" alt="" />
                </div>
                <h2 className='mb-8 text-center font-extrabold leading-[100px] text-[150px] text-rose-600'>{status || 404}</h2>
                <p className='text-center text-3xl font-semibold mb-10'>{error?.message}</p>
                <div className='flex justify-center'>
                    <button onClick={()=>navigate('/')} className='py-3 px-5 border-2 border-slate-300 text-slate-800 uppercase text-lg font-semibold rounded-md hover:bg-slate-800 hover:text-white'>Back To Home</button>
                </div>
            </section>
        </main>
    );
};

export default ErrorPage;