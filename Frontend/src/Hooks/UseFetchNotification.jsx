import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchNotification() {
    const authHeader = useAuthHeader()
    
    const Fetchcourse=()=>{

        return axios.get(`https://deconline.senaycreatives.com/api/Notfication`,{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['fechNotification'],  queryFn: Fetchcourse })
 
}
