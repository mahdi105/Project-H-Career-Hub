import React from 'react';
import PageTitle from './PageTitle';

const Blog = () => {
    return (
        <main>
            <PageTitle>General Knowledge</PageTitle>
            <section className='container mx-auto px-4 lg:px-10 mb-[80px]'>
                <h2 className='text-2xl font-bold mb-5'>Answer to the questions below</h2>
                <ol className='list-decimal ml-5 mb-4'>
                    <li>When Context API is used in a React App?</li>
                    <li>What is React Custom Hook?</li>
                    <li>What do useRef and useMemo mean?</li>
                </ol>
                <div className='mb-5'>
                    <h3 className='text-xl font-semibold mb-1'>When Context API is used in a React App?</h3>
                    <p>It is an alternative of props. Props is unidirectional which is not convenient every time. Sometime we have to pass data to sibling component or even to the parent, at this point data passing through props complicated. To make it easier, we use context API. Most of the time it is declared and used from the root component. It works like a mobile tower. Using Context API, we can access a particular from every child component of Root Element of the react app.</p>
                </div>
                <div className='mb-5'>
                    <h3 className='text-xl font-semibold mb-1'>What is React Custom Hook?</h3>
                    <p>It's a special function. Creating a function like this, it has some method provided by React. Some time we have to work with reusable unique functionality in our application, at this stage may be the react built in hooks aren't enough to add the functionality. React.js gives us some methods to create the functionality. This function is called React Custom Hook. We can create multiple Custom Hooks and use multiple times as we want.</p>
                </div>
                <div className='mb-5'>
                    <h3 className='text-xl font-semibold mb-1'>What do useRef and useMemo mean?</h3>
                    <p><strong>useRef: </strong>It's a built in function of React.js. It allows to create a value persists re-renders or to create a mutable reference to a DOM element. It returns an object. There is a property in the object called .current. The value is persisted and these values are accessed from the current property of the returned object</p>
                    <p><strong>useMemo: </strong><br/>In computing, memoization makes programs faster. Eliminate the repetitive computation of results. And also avoide repeated calls to functions that process the same input.</p>
                    <p>Here, React.js 'useMemo' Hook, It returns a memoized value. This value is actually cached and that's why same program and computation doesn't need perform again. Just use the cached output. This way it prevents repetive computation. Make the application faster as well.</p>
                </div>
            </section>
        </main>
    );
};

export default Blog;