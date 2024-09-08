import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchEachAdminCourse(id) {
    const authHeader = useAuthHeader()
    
    const Fetchcourse=()=>{

        return axios.get(`https://deconline.senaycreatives.com/api/admin/courses/${id}`,{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['fechEachAdmincourses',id],  queryFn: Fetchcourse , enabled: !!id,})
 
}
