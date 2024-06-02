import { useEffect, useState } from "react"
import { BACKEND_URL } from "../pages/config";
import axios from "axios";
export interface Blog{
    content:string,
    title:string , 
    id:number  , 
    author:{
        name:string 
    }
}
export const useBlogId=({id}:{id:string})=>{
    const [ loading,setloading] = useState(true) ; 
    const[blog,setBlog] = useState<Blog>() ; 
    useEffect(()=>
    {
        async function getval(){
           const response =  await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,
           {
            headers:{
            Authorization:localStorage.getItem("token")
            } 
           }
           );
           setBlog(response.data) ; 
           setloading(false)

        }
        getval() ; 
    },[])
    return {
        blog,
        loading 
    }
} 

export const useBlog= ()=>{
    const [ loading,setloading] = useState(true) ; 
    const[blogs,setBlog] = useState<Blog[]>([]) ; 
    useEffect(()=>
    {
        async function getval(){
           const response =  await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,
           {
            headers:{
            Authorization:localStorage.getItem("token")
            } 
           }
           );
           setBlog(response.data) ; 
           setloading(false)

        }
        getval() ; 
    },[])
    return {
        blogs,
        loading 
    }
}