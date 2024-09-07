import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchCourseByCatagory(catagoryid) {
    const authHeader = useAuthHeader()
    
    const Fetchcourse=()=>{

        return axios.get(`https://dec-online-otal.vercel.app/api/courses/catagory/${catagoryid}`,{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['FetchByCatagory',catagoryid],  queryFn: Fetchcourse , enabled: !!catagoryid,})
 
}
