import { SignupInput } from "@eshan_2001/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../pages/config";


export default function Auth({type}:{type:"signup"|"signin"}) {
    // enforcing type in postInput state varaible 
    const [postInput,setpostInput] = useState<SignupInput>({
        username:"", 
        password:"",
        name: ""
    }
    )
    const navigate = useNavigate() ; 
    async function sendRequest(){
        try {
            console.log(postInput)
       const response =  await axios.post(`${BACKEND_URL}/api/v1/user/${type==='signup'?'signup':'signin'}`,postInput);
        const jwt = response.data;
        localStorage.setItem('token',jwt)
        navigate('/blogs')
        }
        catch(e){
            console.log(e)
        }
        

    }
  return (
    <div className="bg-white text-black flex  justify-center flex-col h-screen">
        <div className=" flex justify-center">
            <div className="px-10"> 
        <div className=" text-3xl font-extrabold ">
            Create Account 
        </div> 
        <div className="text-slate-400 "> 
        {
              type==="signin"? "Donot have a account" : " Already have a account?"
        }
                <Link to = {type==='signup'?'/signin':'/signup'} className="pl-2 underline">{
                type==='signup'?'Sign in ' :'Sign up ' }
                </Link>
                <div className="pt-10 space-y-4">
                {type=="signup"?<Lablled label="Name" placeholder="enter name" onChange={
                    (e)=> setpostInput({
                        ...postInput , //spread operator used 
                        name:e.target.value
                    })
                }/>:null}
                 <Lablled label="Username" placeholder="enter username" onChange={
                    (e)=> setpostInput({
                        ...postInput , //spread operator used 
                        username:e.target.value
                    })
                }/>
                 
                <Lablled label="Password" type = {"password"} placeholder="enter password" onChange={
                    (e)=> setpostInput({
                        ...postInput , //spread operator used 
                        password:e.target.value
                    })
                }/>
                <div className="flex justify-center items-center">
                <button type="button" className="focus:outline-none text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
                onClick={sendRequest}
                >
                {type==="signup"? "Sign up":"Sign in"}</button>
                </div>
                </div>


        </div> 
    </div>
    </div> 
    </div>
  )
}
interface LablledType{
    label:string , 
    placeholder : string , 
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void ,
    type?:string 

}
function Lablled({label, placeholder,onChange,type  }:LablledType){
    return (
        <>
        
    <label  className="block mb-2 text-sm font-bold text-black dark:text-white ">{label}</label>
    <input onChange={onChange} type={type||"text"} id="large-input" className="block w-full p-4 text-black border border-black rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "placeholder={placeholder}/>

        </>
    )
}
