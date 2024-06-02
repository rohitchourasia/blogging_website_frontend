import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";


export default function Appbar() {
  return (
    <div className="border-b flex justify-between px-10 py-4">
        <Link to = "/" className="flex flex-col justify-center cursor pointer  ">
            Medium
        </Link>
        <div className="flex items-center">
        <Link to="/publish" className="cursor-pointer">
          <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-4">New</button>
        </Link>
        <Avatar name="Eshan" size={10} />
      </div>
    </div>
  )
}
