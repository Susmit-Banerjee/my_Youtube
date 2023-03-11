import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import errorIMG from '../assets/errorImg.png';

const Error = () => {
  const error = useRouteError();
  return (
    <div className='flex flex-col items-center h-screen gap-8 my-20'>
      <div className='w-4/5 md:w-auto lg:w-1/2'>
        <img className='w-full bg:white' src={errorIMG}/>
      </div>
      <div className='w-4/5 md:w-auto lg:w-3/5 mt-4'>
        <h1 className='lg:text-xl my-2'>Uh-oh. Whatever you're looking for doesn't seem to exist. </h1>
        <h1 className='lg:text-xl mb-6'><span className='text-blue-500 font-medium'>Which begs the question: </span>How certain are you that what you're looking for is actually what you need?</h1>
        <Link to={'/'} className='rounded-xl p-2 tracking-widest bg-gray-400 hover:bg-gray-500 cursor-pointer '>BACK TO HOME</Link>
      </div>
    </div>
  )
}

export default Error;