import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchAllCourses(searchparams, selectedCategory) {
    const authHeader = useAuthHeader();
    const params = {
        q: searchparams,
        category: selectedCategory, // Corrected typo: 'catagory' to 'category'
    };

    const Fetchcourse =async () => {
        return await axios.get('https://dec-online-xek6-r74pfr2fz-andigechs-projects.vercel.app/api/courses', {
            headers: { '_auth': authHeader },
            params: params, // Pass the params object here
        });
    };

    return useQuery({ queryKey: ['fetchAllCourse', searchparams, selectedCategory], queryFn: Fetchcourse });
}