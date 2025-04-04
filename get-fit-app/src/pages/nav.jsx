import { Link } from "react-router-dom";
import Graph from "./graph";
import { Menu , X  } from "lucide-react";
import { useState } from "react";
const Nav = () => {

    const [isOpen , setIsOpen] = useState(false);

    return ( 
        <div>
            <nav className=" bg-gray-500 bg-opacity-65 p-4 relative h-28 ">
                <div className="  sm:flex justify-between items-center">

                    <div className="mr-auto flex justify-start">
                        <Link to="/"><img src="../../image/Get Fit.png" alt="Logo"></img></Link>
                    </div>

                    <div className="hidden text-orange-50 text-lg font-semibold sm:flex gap-6 mr-10 justify-self-end">
                    <Link className="active:scale-95 hover:scale-105 pl-2 pr-2 border-b-4 rounded-md border-orange-500 border-opacity-0 hover:border-opacity-100 transform duration-100 ease-in"  to="/home">Home</Link>
                    <Link className="active:scale-95 hover:scale-105 pl-2 pr-2 border-b-4 rounded-md border-orange-500 border-opacity-0 hover:border-opacity-100 transform duration-100 ease-in"  to="/exerciseList">Exercise</Link>
                    <Link className="active:scale-95 hover:scale-105 pl-2 pr-2 border-b-4 rounded-md border-orange-500 border-opacity-0 hover:border-opacity-100 transform duration-100 ease-in" to="/progress">Progress</Link>
                    <Link className="active:scale-95 hover:scale-105 pl-2 pr-2 border-b-4 rounded-md border-orange-500 border-opacity-0 hover:border-opacity-100 transform duration-100 ease-in" to="/about">About</Link>
                    <Link className="active:scale-95 hover:scale-105 pl-2 pr-2 border-b-4 rounded-md border-orange-500 border-opacity-0 hover:border-opacity-100 transform duration-100 ease-in" to="/setting">Setting</Link>
                    </div> 
                
                <button className="sm:hidden text-white flex justify-self-end items-start -translate-y-12"
                        onClick={()=>{setIsOpen(!isOpen)}}
                        > 
                    {isOpen ? <X size={40} /> : <Menu size={50} />}
                </button>
                </div>

                {isOpen && (
                    <div className="  md:flex justify-between items-center">

                    

                    <div className="text-orange-100 text-center flex flex-col bg-gray-500 bg-opacity-50 p-5 justify-self-end gap-7 -translate-y-2 translate-x-5 ">
                    <Link to="/">Home</Link>
                    <Link to="/exerciseList">Exercise</Link>
                    <Link to="/progress">Progress</Link>
                    <Link to="/about">About</Link>
                    <Link to="/setting">Setting</Link>
                    </div> 
                
                </div>
                )}

            </nav>






            
        </div>
 );
}
 
export default Nav;