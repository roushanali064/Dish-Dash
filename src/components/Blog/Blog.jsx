import React from 'react';


const Blog = () => {

    return (
        <div className='container mx-auto px-4'>
            <div className='mb-4'>
                <h2 className='font-bold text-3xl'>1. Differences between uncontrolled and controlled components ?</h2>
                <p className='text-xl ml-6'><span className='text-2xl'>Answer :</span> controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='mb-4'>
                <h2 className='font-bold text-3xl'>2. How to validate React props using PropTypes ?</h2>
                <p className='text-xl ml-6'><span className='text-2xl'>Answer :</span> PropTypes.any : The prop can be of any data type.
                    PropTypes.bool : The prop should be a Boolean. <br />
                    PropTypes.number : The prop should be a number.
                    <br />
                    PropTypes.string : The prop should be a string.
                    <br />
                    PropTypes.func : The prop should be a function.
                    <br />
                    PropTypes.array : The prop should be an array.</p>
            </div>
            <div className='mb-4'>
                <h2 className='font-bold text-3xl'>3. Tell us the difference between nodejs and express js ?</h2>
                <p className='text-xl ml-6'><span className='text-2xl'>Answer :</span> NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            </div>
            <div className='mb-4'>
                <h2 className='font-bold text-3xl'>4. What is a custom hook, and why will you create a custom hook ?</h2>
                <p className='text-xl ml-6'><span className='text-2xl'>Answer :</span> a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code.</p>
            </div>
            
        </div>
    );
};

export default Blog;