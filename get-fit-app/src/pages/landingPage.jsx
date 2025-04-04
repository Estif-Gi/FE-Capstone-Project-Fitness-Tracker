import { Link } from "react-router-dom";

const Landing = () => {
    return ( 
        <header className="min-h-screen backdrop-blur-sm p-2">
            <img className="m-10 flex justify-self-center w-[60%] sm:w-[30%] md:w-[20%] "
                 src='../../image/Get Fit.png' alt="Logo"
            />
            <h1 className="text-orange-300 font-bold hidden">Get Fit</h1>
            <div className="w-96 md:w-[50%] flex justify-self-center mt-[10%] md:mt-[4%] ">
                <p className="text-white text-center text-2xl  ">Our fitness app empowers you to log custom exercises, track sets, reps and weight, and monitor your progress over time. Stay motivated with personalized insights and data-driven results to achieve your fitness goals efficiently.</p> 
            </div>
            <div className="flex justify-center mt-[10%] md:mt-[8%]"> 

            <Link to='/signup'> 
                <button  className=" shadow-orange-600 hover:shadow-lg shadow-md hover:shadow-orange-500 w-32 bg-gray-500 rounded-xl p-2 hover:bg-gray-800 transform duration-300 active:scale-95 text-white font-bold text-2xl hover:scale-105 ml-6" >
                    Sign Up
                </button> 
            </Link>

            <Link to='/login'> 
                <button  className="  shadow-orange-600  shadow-md hover:shadow-lg hover:shadow-orange-500 w-32 bg-gray-500 rounded-xl p-2 hover:bg-gray-800 transform duration-300 active:scale-95 text-white font-bold text-2xl hover:scale-105 ml-8" >
                    Log In
                </button> 
            </Link>

            </div>

        </header>
     );
}
 
export default Landing;