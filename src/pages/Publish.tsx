import { ChangeEvent, useState } from "react"
import Appbar from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "./config";
import { useNavigate } from "react-router-dom";


export default function Publish() {
  const[title,setTitle] = useState("") ; 
  const[content,setDescription]= useState(""); 
  const navigate= useNavigate();
  return (
    <div>
        <Appbar/>
    <div className="flex justify-center w-full">
        <div className="max-w-screen-lg w-full">
      

<input type="text" onChange={(e)=>setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5  dark:bg-gray-700" placeholder="Title"/>

<Texteditor onChange={(e)=>setDescription(e.target.value)}/>
<button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
onClick={
  async function(){
    
    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
      title,
      content
    },
    {
    headers:{
      Authorization:localStorage.getItem("token")
      } 
     } );
     navigate(`/blog/${response.data.id}`)
    

  }
}
>
       Publish post
   </button>  

    </div>    
                          
    </div>
    </div>
  )
}
function Texteditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
  return (
    
<form>
   <div className="w-full mb-4   ">
       <div className="flex items-center justify-between  border ">
          
       <div className=" py-2 bg-white rounded-b-lg w-full ">
           <label  className="sr-only">Publish post</label>
           <textarea id="editor" onChange={onChange} rows={8} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:outline-none" placeholder="Write an article..." required />
       </div>
   </div>
   </div>
</form>


  )
}
