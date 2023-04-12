import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import JobCategories from '../JobCategory/JobCategories';
import SectionHeading from '../SectionHeading/SectionHeading';
import JobCard from '../JobCard/JobCard';
import { JobContext } from '../../App';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [jobs, setJobs] = useState([]);
    const loadedJobs = useContext(JobContext);
    useEffect(() => {
        const newJobs = loadedJobs.slice(0, 4);
        setJobs(newJobs);
    }, [loadedJobs]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('jobCategory.json');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                alert('Categories are not found')
            }
        }
        fetchData()
    }, []);
    const handleShowAllJobs = () => {
        setJobs(loadedJobs);
    }
    return (
        <main>
            {/*================ Hero Section ================ */}
            <div className='bg-[#f9f9ff]'>
                <section id='hero' className="container mx-auto px-4 lg:px-10 mb-[40px] md:mb-[90px] min-h-[74%] bg-[url('/hardy.png')] bg-no-repeat bg-[length:350px_350px] md:bg-[length:650px_570px] bg-[50%_100%] md:bg-[90%_100%] pb-[380px] md:pb-28 pt-12">
                    <div className='md:w-6/12'>
                        <h1 className='font-extrabold md:font-bold text-[40px] md:text-[70px] font-sans leading-[46px] md:leading-[75px] mb-6'><span className='font-extrabold text-[#7E90FE]'>Dream Job</span> Is Knocking At The Door</h1>
                        <p className='text-[#757575] font-medium text-[18px] mb-6 w-10/12'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <div>
                            <button className='text-white font-bold py-5 px-7 rounded-md  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#3c56fd] hover:to-[#6232e7]'>Get Started</button>
                        </div>
                    </div>
                </section>
            </div>
            {/*================ Job Category Section ================ */}
            <div className='container mx-auto lg:px-10 '>
                <section className='mb-[90px] px-4 md:p-0'>
                    <SectionHeading title={'Job Category List'} desc={'Explore thousands of job opportunities with all the information you need. Its your future'}></SectionHeading>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                        {
                            categories.map(category => <JobCategories key={category.id} category={category}></JobCategories>)
                        }
                    </div>
                </section>
            </div>

            {/* ============== Featured Jobs Section ================ */}
            <div className='container mx-auto lg:px-10 '>
                <section className='mb-20 md:mb-40 px-4 md:p-0'>
                    <SectionHeading title={'Featured Jobs'} desc={'Explore thousands of job opportunities with all the information you need. Its your future'}></SectionHeading>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
                        {
                            jobs.map(job => <JobCard key={job.id} job={job}></JobCard>)
                        }
                    </div>
                    <div className='flex justify-center items-center'>
                        {
                            jobs.length > 4 ? '' : <button onClick={handleShowAllJobs} className='py-4 px-7 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#3c56fd] hover:to-[#6232e7] text-white'>See All Jobs</button>
                        }
                    </div>
                </section>
            </div>

        </main>
    );
};

export default Home;