import React from 'react';
import PageTitle from './PageTitle';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const marks = [
        {
            id: "6d77b050e77d6c8e6b84a6c01bdf5d5c",
            keyName: "A1",
            marks: 57,

        },
        {
            id: "d5e7b73d4a3f7e8c2b69a7d5f3c8e7a1",
            keyName: "A2",
            marks: 60
        },
        {
            id: "2a1c3e5f4b6d8c7e9a0f2d1b3c5e7a9",
            keyName: "A3",
            marks: 50
        },
        {
            id: "9c8e7a6b5d4f3e2c1a0b9d8f7e6a5c",
            keyName: "A4",
            marks: 60
        },
        {
            id: "f1e3d5c7b9a0c2e4d6f8b0a9c1e2d4",
            keyName: "A5",
            marks: 52
        },
        {
            id: "b0a2c1e3f4d6b7a8c9e0f1d2e3b4a5",
            keyName: "A6",
            marks: 60
        },
        {
            id: "5c7e8a9b0d1f2c3e4a5b6d7f8e9a0",
            keyName: "A7",
            marks: 60
        }
    ]
    return (
        <main>
            <PageTitle>Assignment Marks Statistics</PageTitle>
            <section className='flex justify-center mb-10'>
                <AreaChart width={800} height={250} data={marks}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="keyName" />
                    <YAxis dataKey="marks"/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip/>
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </section>
        </main>
    );
};

export default Statistics;