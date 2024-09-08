import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchAdminCourse() {
    const authHeader = useAuthHeader()
    
    const Fetchcourse=()=>{

        return axios.get(`https://deconline.senaycreatives.com/api/admin/courses`,{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['fechcoursemoduule'],  queryFn: Fetchcourse })
 
}
