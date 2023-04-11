import React, { useContext, useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import { JobContext } from '../App';
import { getStoredJobs } from '../utils/fakedb';

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
    console.log(applieds);
    return (
        <main>
            <PageTitle>Applied Jobs</PageTitle>
            <section>
                <div>

                </div>
                <div className='grid grid-cols-1 gap-6'>

                </div>
            </section>
        </main>
    );
};

export default AppliedJobs;