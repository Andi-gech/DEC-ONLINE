import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchQuizByModule(id) {
    const authHeader = useAuthHeader()
    
    const Fetchcourse=()=>{

        return axios.get(`https://dec-online-otal.vercel.app/api/exams/module/${id}`,{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['fechedquizbymodule',id],  queryFn: Fetchcourse , enabled: !!id, refetchOnWindowFocus: false})
 
}
