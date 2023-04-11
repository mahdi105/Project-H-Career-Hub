import React, { useEffect, useState } from 'react';
import './Home.css'
import JobCategories from '../JobCategory/JobCategories';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useLoaderData } from 'react-router-dom';
import JobCard from '../JobCard/JobCard';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [jobs, setJobs] = useState([]);
    const loadedJobs = useLoaderData();
    useEffect(()=>{
       const newJobs = loadedJobs.slice(0,4); 
       setJobs(newJobs);
    },[]);
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
        <main className='container mx-auto lg:px-10 '>
            {/*================ Hero Section ================ */}
            <section id='hero' className="bg-[#f9f9ff] mb-[90px] min-h-[74%] bg-[url('hardy.png')] bg-no-repeat bg-[length:650px_570px] bg-[90%_100%] pb-28 pt-12">
                <div className='w-6/12'>
                    <h1 className='font-bold text-[70px] font-sans leading-[75px] mb-6'><span className='font-extrabold text-[#7E90FE]'>Dream Job</span> Is Knocking At The Door</h1>
                    <p className='text-[#757575] font-medium text-[18px] mb-6 w-10/12'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div>
                        <button className='text-white font-bold py-5 px-7 rounded-md  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#3c56fd] hover:to-[#6232e7]'>Get Started</button>
                    </div>
                </div>
            </section>
            {/*================ Job Category Section ================ */}
            <section className='mb-[90px]'>
                <SectionHeading title={'Job Category List'} desc={'Explore thousands of job opportunities with all the information you need. Its your future'}></SectionHeading>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                    {
                        categories.map(category => <JobCategories key={category.id} category={category}></JobCategories>)
                    }
                </div>
            </section>
            {/* ============== Featured Jobs Section ================ */}
            <section className='mb-40'>
                <SectionHeading title={'Featured Jobs'} desc={'Explore thousands of job opportunities with all the information you need. Its your future'}></SectionHeading>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
                    {
                        jobs.map(job => <JobCard key={job.id} job={job}></JobCard>)
                    }
                </div>
                <div className='flex justify-center items-center'>
                    {
                        jobs.length > 4 ?'': <button onClick={handleShowAllJobs} className='py-4 px-7 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#3c56fd] hover:to-[#6232e7] text-white'>See All Jobs</button>
                    }
                </div>
            </section>
        </main>
    );
};

export default Home;