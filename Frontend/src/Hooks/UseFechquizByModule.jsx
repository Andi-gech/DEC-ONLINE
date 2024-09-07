import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchQuizByModule(id) {
    const authHeader = useAuthHeader()
    
    const Fetchcourse=()=>{

        return axios.get(`https://deconline.senaycreatives.com/api/exams/module/${id}`,{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['fechedquizbymodule',id],  queryFn: Fetchcourse , enabled: !!id, refetchOnWindowFocus: false})
 
}
