import App from "../App";
import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlog } from "../hooks";


export default function Blogs() {
  const{blogs,loading} = useBlog() ; 
  
  
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
  
    // Code for rendering blogs when not loading
  
  

  return (
    <div>
      <Appbar/>
    <div className="flex justify-center">
    <div>
      {
    blogs.map(blog => (
  <BlogCard
    key={blog.id} // Assuming each blog has a unique 'id' field
    authorname={ blog.author.name ? blog.author.name : "Unknown Author"}
    title={blog.title}
    content={blog.content}
    id= {blog.id}
    publishedDate="25/04/2001"
  />
))
    }
    </div>
    </div>
    </div>
  )
}
