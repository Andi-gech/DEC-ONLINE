import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchEachUser(id) {
    const authHeader = useAuthHeader()
    
    const Fetchcourse=()=>{

        return axios.get(`https://dec-online-xek6-r74pfr2fz-andigechs-projects.vercel.app/api/user/${id}`,{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['fechedEachUser',id],  queryFn: Fetchcourse , enabled: !!id, refetchOnWindowFocus: false})
 
}
