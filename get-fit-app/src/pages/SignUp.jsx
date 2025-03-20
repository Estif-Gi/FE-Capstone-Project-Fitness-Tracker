import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [email , setEmail] = useState('');
    const [name , setName ] = useState('');
    const [password , setPass]     = useState('');

    const [error , setError ] = useState({});
    const [submit , setSubmit] = useState(false);

    const handleChange = (e) => {
        const {name , value } = e.target;
        if (name === "username") {
            setName(value)
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPass(value);
        };

    };


    const validation = (e) => {
        const newError ={};
         if (!name.trim()) {newError.username = "please enter your Name"}
         if (!email.trim()) {newError.email = "pleas enter your Email"}
         if (!password.trim()) {newError.password = "please enter a valid Password"} 
         else if (password.length < 6) newError.password = "Password must be at least 6 characters.";

        return newError;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const errorValidator = validation();
        if(Object.keys(errorValidator).length === 0) {
            setSubmit(true);
            const userInfo ={name , email , password };
            let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            if (!Array.isArray(existingUsers)) {
                existingUsers = []; 
            }

            existingUsers.push(userInfo);


            console.log(userInfo)
            localStorage.setItem("users" , JSON.stringify(existingUsers));
            setError({});
        }else {
            setError(errorValidator);
            setSubmit(false);

        };

    };


    return ( 
        <div className=" bg-green-600 w-auto p-10 rounded-3xl flex justify-self-center mt-36 relative justify-center h-auto shadow-2xl  ">
        <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input name="username" type="text" value={name} placeholder="Username" onChange={handleChange} className={`mt-2 mb-2 rounded-2xl border-2 font-semibold text-xl p-3 ${error.username ? "border-red-500 " : "border-blue-100"}`}/>
            {error.username && <p className="text-red-400 text-xl font-semibold">{error.username}</p>}  

            <input name="email" type="email" value={email} placeholder="Email" onChange={handleChange} className={`mt-2 mb-2 rounded-2xl border-2 font-semibold text-xl p-3 ${error.email ? "border-red-500 " : "border-blue-100"}`}/>
            {error.email && <p className="text-red-400 text-xl font-semibold">{error.email}</p>}   
           
            <input name="password" type='password' value={password} placeholder="Password" onChange={handleChange} className={`mt-2 mb-2 rounded-2xl border-2 font-semibold text-xl p-3 ${error.password ? "border-red-500 " : "border-blue-100"}`}/>
            {error.password && <p className="text-red-400 text-xl font-semibold">{error.password}</p>}   
        

            <div className='flex justify-around mt-10'>
                <button className="  w-32 bg-blue-300 rounded-xl p-2 border-blue-600 border-2 hover:bg-blue-400 transform duration-100 active:scale-95 text-white font-bold text-2xl" type='submit'>Sign Up</button>
                <Link to='/login'> <button  className=" bg-blue-300 rounded-xl p-2 border-blue-600 border-2 hover:bg-blue-400 transform duration-100 active:scale-95 text-white font-bold text-2xl" >Log In</button> </Link>


            </div>
            {submit && <p className="uppercase text-center font-bold text-white text-3xl mt-5 transform duration-200 ">welcome</p>}
        </form>
        </div>
        </div>
     );
}
 
export default SignUp;