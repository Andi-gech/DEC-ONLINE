import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchAllModules(courseid) {
    const authHeader = useAuthHeader()
    
    const Fetchcourse=()=>{

        return axios.get(`https://dec-online-xek6-r74pfr2fz-andigechs-projects.vercel.app/api/coursemodule/course/${courseid}`,{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['FetchAllModules',courseid], queryFn: Fetchcourse , enabled: !!courseid,})
 
}
