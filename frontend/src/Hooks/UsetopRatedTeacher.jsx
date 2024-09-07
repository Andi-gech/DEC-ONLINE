import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseTopratedUser()  {
    const authHeader = useAuthHeader()
    
    const Fetchcourse=()=>{

        return axios.get(`https://dec-online-xek6-r74pfr2fz-andigechs-projects.vercel.app/api/user/teacher`,{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['TopRated'],  queryFn: Fetchcourse })
 
}
