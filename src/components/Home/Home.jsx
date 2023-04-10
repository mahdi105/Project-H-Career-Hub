import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <main className='container mx-auto px-10 bg-[#f9f9ff]'>
            <section id='hero' className='min-h-[74vh]'>
                <div className='w-6/12'>
                    <h1 className='font-bold text-[70px] font-sans leading-[75px] mb-6'>One Step Closer To Your <span className='font-extrabold text-[#7E90FE]'>Dream Job</span></h1>
                    <p className='text-[#757575] font-medium text-[18px] mb-6 w-10/12'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div>
                        <button className='text-white font-bold py-5 px-7 rounded-md  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#3c56fd] hover:to-[#6232e7]'>Get Started</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;