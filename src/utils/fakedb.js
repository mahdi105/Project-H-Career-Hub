import { appliedMessage, notify } from "../components/Details";

const addToDb = (id) => {
    const savedJobs = getStoredJobs();//[]or[=,=,=]
    const exist = savedJobs.find(ID => ID === id);
    if(!exist){
        savedJobs.push(id);
        localStorage.setItem('jobs-list', JSON.stringify(savedJobs));
        appliedMessage();
    }else{
        notify();
    }
}
const getStoredJobs = ()=>{
    const storedJobs = localStorage.getItem('jobs-list');
    let savedJobs = [];
    if(storedJobs){
        savedJobs = JSON.parse(storedJobs);
    }
    return savedJobs;
}

export {
        addToDb,
        getStoredJobs
    };