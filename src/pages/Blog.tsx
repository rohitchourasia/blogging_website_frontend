import { useParams } from "react-router-dom";
import { useBlogId } from "../hooks"
import FullBlog from "../components/FullBlog";
import BlogSkeleton from "../components/BlogSkeleton";
import Appbar from "../components/Appbar";


export default function Blog() {
  const{id} = useParams()
  const{blog,loading} = useBlogId({id:id ||""}) ;
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">  
        <div className="fixed top-0 w-full"> 
          <Appbar />
        </div>
        <div className="flex justify-center items-center w-full h-full">  
          <BlogSkeleton />
        </div>
      </div>
    );
  }
  if (!blog) { // Check if blog is undefined
    return <div>Blog not found</div>;
  }
  
  return (
    <div>
      <FullBlog blog={blog}/>
    </div>
  )

}
