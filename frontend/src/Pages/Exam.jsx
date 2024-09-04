import React, { useEffect, useState } from 'react'
import { FaClock } from 'react-icons/fa'
import Question from './Question'
import Countdown from 'react-countdown';
import { Link, useParams } from 'react-router-dom';
import ExamResult from './ExamResult';
import UseFetchQuiz from '../Hooks/UseFechQuiz';

import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import axios from 'axios';

export default function Exam() {
    const [ready ,setready]=useState(false)
    const [completed,setcompleted]=useState(false)
    const [examAnswers,setexamAnswer]=useState([])
    
    const [marks,setmark]=useState(0)
    const [ispassed,setispassed]=useState(false)
    const [time,settime]=useState(0)
    const [remainingTime,setremainingTime]=useState(0.2* 60 * 1000)
    const {examid}=useParams()
    const {data}=UseFetchQuiz(examid)
    
    

     console.log(data?.data?.questions)
     useEffect(() => {
       settime( 60*5000)
     },data)

 const authHeader = useAuthHeader()
    const Result =async () =>{
      console.log(examAnswers,'answers')
      const res=await axios.post(`http://localhost:8080/api/enroll/exam/${examid}/evaluate`,{answers:examAnswers},{headers:{'_auth':`${authHeader}`}})
   if(res.status==200){
    console.log(res)
    console.log(res,"res")
    setmark(res?.data?.result?.marks)}
    setispassed(res?.data?.result?.ispassed)
  
    }

    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        // Result()

        // setcompleted(true)
        
      } else {
        // Render a countdown
        return <span>{minutes}:{seconds}</span>;
      }
    };
  
    const HandleExamOptions=(data)=>{
    

        const found = examAnswers.find(item => item.Questionid === data.Questionid)
        if (found) {
            found.Answerid = data.Answerid
          
        } else {
            examAnswers.push(data)
        }
    

    }
   
    if(ready){
  return (
    <div className='sm:ml-[18%]   w-[93%] min-h-screen items-center   overflow-hidden flex flex-col dark:bg-slate-950 bg-white'>
        <div className=' fixed top-0 hidden sm:flex right-[0%] w-[83%] px-[100px]  h-[70px] overflow-y-hidden  dark:bg-slate-950 bg-white border-b-2 border-gray-200 dark:border-gray-700  py-4  items-center justify-between flex-row'>
          
           <div className='text-black dark:text-white text-[20px] font-bold'>
            Quiz-[1]
           </div>
           <div className='text-white text-[20px] flex flex-row  items-center font-bold'>
            
           
            <div className='  flex flex-row ml-[10px] items-center justify-center  animate-pulse text-white bg-orange-700 px-12 py-2  rounded-full font-bold '>
            <FaClock size={20}/>
              <p className='text-white text-[18px]  mx-2'>Remaining Time</p>
              
              <Countdown date={Date.now() + (time)}  renderer={renderer}/>
               
            </div>
           </div>
        </div>
        {!completed &&
        <div className='sm:hidden fixed top-[5px] right-0 h-[40px] flex items-center justify-between px-5  rounded-full animate-pulse z-[777777777] bg-red-500'>
          <div className='h-full px-5 flex flex-row items-center justify-between'>
            <p className='text-white text-[20px] font-bold'>remainingTime  <Countdown date={Date.now() + (time)}  renderer={renderer}/></p>
           
               

          </div>
        </div>}
        <div className='py-[50px]   overflow-y-hidden  w-full  '>
            {
                data?.data?.questions?.map((question)=>{
                    return <Question key={question._id} selectedanswer={examAnswers.find(item => item.Questionid === question.id)} question={question} onclick={(data)=>HandleExamOptions(data)}/>
                }
                    
                )
            }
        
        </div>
        <div onClick={()=>{
          Result()
          setcompleted(true)
        }} className='h-[50px] w-[300px] flex items-center justify-center shrink-0 bg-blue-700 rounded-md'>
          <p className='text-white '>Complete</p></div>
        {
          completed && <ExamResult link={examid} onretake={()=>{
            setcompleted(false)
            setexamAnswer([])
            setmark(0)
            setremainingTime(0.2* 60 * 1000)
            setready(false)
          }} mark={marks} isPassed={ispassed}/>
        }


    </div>
  )

}
if(!ready){
return (
    <div className='sm:ml-[18%] sm:w-[82%] w-full h-screen  dark:bg-slate-950 flex flex-col  items-center py-5 px-5 justify-center '>
        <div className='sm:w-[600px] w-full h-[400px] dark:shadow-gray-600 rounded-md shadow-zinc-700 bg-blue-800 flex items-center justify-center flex-col   shadow-sm'>
<div  className='p-[50px] flex  flex-col  items-center justify-center'>
<div className='  text-white font-bold    text-[24px]'>Notice</div>
        <div className='h-full bg-zinc-250 flex flex-col  items-center'>
            <p className='  text-white'>You Are About To Start A Small Quiz.The Quiz Contains 5 Questions And Each Question Contains 4 Options  You Have 30 Min To Complete The Quiz</p>
            <p className=' text-gray-400  text-sm'>Do You Want To Start The Quiz Now</p>
        <div onClick={()=>{setready(true)
      }} className='w-[200px] cursor-pointer rounded-md shadow-gray-200 shadow-md hover:bg-opacity-85 h-[50px] mt-3 flex items-center justify-center bg-white '>
            <p className=' text-black'>Start Quiz</p>
        </div>
        </div>
</div>
       
        </div>

    </div>
)
}
}