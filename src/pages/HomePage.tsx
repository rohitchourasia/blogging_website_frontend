import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate= useNavigate() ; 
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">Welcome to Our Blogging Website  !</h1>
                <div className="space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={()=>{
                        navigate('/signup')
                    }}>
                        Sign Up
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
                        navigate('/signin')
                    }}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
