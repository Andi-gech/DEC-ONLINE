import React from 'react'


import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/Untitled.png';
import eyu from '../assets/eyu.jpg'
import andi from '../assets/andi.jpg'
import tsega from '../assets/tsega.jpg'



export default function Teams() {
  const isloading=true
   const data=[{
    image:andi,
    Name:'Andualem Getachew',
    Role:'Full Stack Developer',
    githublink:'https://github.com/Andi-gech',
    linkedinlink:'https://www.linkedin.com/in/anduti-gech-250a531a0/'
   },
  {
    image:eyu,
    Name:'Eyuel ',
    Role:'Frontend Developer',
    githublink:'https://github.com/Tsegazeab3/',
    linkedinlink:'https://www.linkedin.com/in/tsegazeab422/'
   },
   {
    image:tsega,
    Name:'Tsegazeab Zegeye',
    Role:'Backend Developer',
    githublink:'https://github.com/fluffyWeird',
    linkedinlink:'https://www.linkedin.com/in/eyuel-zegeye-231300249/'
  }]

  return (
    <div className='min-h-screen  w-screen bg-red-500  overflow-hidden relative'>
     
    <div className="h-[100vh]     w-full bg-zinc-50  bg-grid-white/[0.1]  relative flex flex-col items-center justify-start">
      {/* Radial gradient for the container to give a faded look */}
      
      <header className="w-full h-[70px] bg-zinc-900 shadow-md flex justify-between items-center px-6">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-[50px] h-[50px] rounded-full" />
                    <h1 className="ml-3 text-xl font-bold text-gray-200">DecOnline</h1>
                </div>
                <Link to={'/signup'} className="space-x-4">
                    <button className="px-4 py-2 bg-yellow-500 rounded-md">Sign Up</button>
                </Link>
              
            </header>
     <div className='w-full sm:px-[200px] h-[50px]'>
        <p className='text-black font-bold text-[28px]'>Our Teams</p>
     </div>
      <div className='flex flex-col  z-10 items-center justify-center'>
        
        
        <div className=' flex w-full flex-wrap flex-row items-center justify-center'>
            {isloading&&
            
            <div className='flex w-full flex-col items-center justify-center'>
            <div
  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-white"
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>

</div>
<p className='text-white mt-2'>Loading...</p>
              </div>  }
            
{data?.map((team,index)=>{
    return(
        <div key={index} className="w-[240px] max-w-sm  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <div className="flex flex-col items-center mt-5 pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={team?.image} alt="Bonnie image"/>
            <h5 className="mb-1 text-xl font-medium text-gray-500 dark:text-white">{team?.Name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{team?.Role}</span>
            <div className="flex mt-4 md:mt-6">
                <a href={team?.linkedinlink} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-zinc-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><AiOutlineLinkedin size={25}/></a>
                <a href={team?.githublink} className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-zinc-600 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><AiOutlineGithub size={25}/></a>
            </div>
        </div>
        
    </div>   
    )
})}



           
            
        </div>
        </div>
      <div className='w-full h-[50px]'></div>
   
    
   
 

     </div>

    </div>
  )
}
