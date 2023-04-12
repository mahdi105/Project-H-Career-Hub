import React, { useContext, useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import { JobContext } from '../App';
import { getStoredJobs } from '../utils/fakedb';
import AppliedJob from './AppliedJob';
import { toast } from 'react-hot-toast';

const notifyRemote = () => toast.success("Remote jobs are displayed");
const notifyOnsite = () => toast.success("Onsite jobs are displayed");

const AppliedJobs = () => {
    const [applieds, setApplieds] = useState([]);
    const loadedJobs = useContext(JobContext);
    const savedJobs = getStoredJobs();
    useEffect(()=>{
        const newApplieds = [];
        for(const id of savedJobs){
            const savedJob = loadedJobs.find(job => job.id === id);
            if(savedJob){
              newApplieds.push(savedJob);  
            }
        }
        setApplieds(newApplieds);
    },[loadedJobs]);
    const handleRemoteFilter = () => {
        const newApplieds = [];
        for(const id of savedJobs){
            const savedJob = loadedJobs?loadedJobs.find(job => job.id === id):'';
            if(savedJob){
              newApplieds.push(savedJob);  
            }
        }
        const remoteJobs = newApplieds.map(item => {
            const type = item.type;
            const exist = type.find(item => item === 'Remote');
            if(exist){
                return item;
            }
        });
        const finalRemoteJobs = remoteJobs.filter(item => item !== undefined);
        setApplieds(finalRemoteJobs);
        notifyRemote();
    }
    const handleOnsiteFilter = () => {
        const newApplieds = [];
        for(const id of savedJobs){
            const savedJob = loadedJobs?loadedJobs.find(job => job.id === id):'';
            if(savedJob){
              newApplieds.push(savedJob);  
            }
        }
        const remoteJobs = newApplieds.map(item => {
            const type = item.type;
            const exist = type.find(item => item === 'Onsite');
            if(exist){
                return item;
            }
        });
        const finalRemoteJobs = remoteJobs.filter(item => item !== undefined);
        setApplieds(finalRemoteJobs);
        notifyOnsite();
    }

    return (
        <main>
            <PageTitle>Applied Jobs</PageTitle>
            <section className='container mx-auto lg:px-10 mb-20'>
                
                <div className='flex justify-end items-center gap-4 mb-10'>
                    <p className='font-extrabold text-xl'>Filter By: </p>
                    <button onClick={handleRemoteFilter} className='py-3 px-4 rounded-md font-extrabold text-[#7E90FE] border border-[#7E90FE] hover:bg-[#7E90FE] hover:text-white'>Remote</button>
                    <button onClick={handleOnsiteFilter} className='py-3 px-4 rounded-md font-extrabold text-[#7E90FE] border border-[#7E90FE] hover:bg-[#7E90FE] hover:text-white'>Onsite</button>
                </div>
                <div className='grid grid-cols-1 gap-6'>
                    {
                       applieds.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>) 
                    }
                </div>
            </section>
        </main>
    );
};

export default AppliedJobs;