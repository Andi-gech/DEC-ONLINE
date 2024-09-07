import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchAllEnrolles() {
    const authHeader = useAuthHeader()

    const Fetchcourse=()=>{

        return axios.get('https://dec-online-xek6-r74pfr2fz-andigechs-projects.vercel.app/api/enroll',{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['fetchAllEnrolles'], queryFn: Fetchcourse })
 
}
