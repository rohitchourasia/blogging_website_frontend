import { Link } from "react-router-dom"

interface BlogCardProp{
    authorname:string , 
    title : string , 
    publishedDate:string, 
    content:string ,
    id:number
}

export default function BlogCard({
    authorname,
    title,
    publishedDate,
    content ,
    id
}: BlogCardProp) {
  return (
    <Link to={`/blog/${id}`}>
    <div className="flex flex-col border-b-2 border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer">
      <div className="mb-2">
       <Avatar name={authorname} /> {authorname} . {publishedDate}
      </div>
      <div className="mb-2 font-bold">
        {title} 
      </div>
      <div className="mb-2 font-thin">
            {
                content.length>100?content.substring(0,100)+"...": content.substring(0)
            }
      </div>
      <div className="mb-2">
        {
            `${Math.ceil(content.length/100)} mins`
        }
      </div>
      <div className="bg-slate-200 h-1 w-full">
        </div>
    </div>
    </Link>
  )
}
export function Avatar({name,size=4}:{name:string,size?:number}){
    return (
        
<div className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-400 rounded-full dark:bg-gray-600`}>
    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>

    )

}
