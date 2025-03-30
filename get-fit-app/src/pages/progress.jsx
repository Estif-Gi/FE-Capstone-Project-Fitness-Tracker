import UseStore from "../stores/store";
import { useState } from "react";
import Graph from "./graph";


const GraphInput = () => {
    const addGraphInput = UseStore((state)=>state.addGraphInput)
    const [upper , setUpper ] = useState([]);
    const [lower , setLower] = useState([]);
    const [core , setCore] = useState([]);
    const [date , setDate] = useState('')

    const handelSubmit = (e) =>{
        e.preventDefault();
        addGraphInput({
        upper:upper,
        date:date,
        lower:lower,
        core:core,

        });
        setCore([]);
        setLower([]);
        setUpper([])
        setDate("");
    }


    return (
     <div className="md:flex md:justify-self-center  ">
        <Graph/>

        <div className="text-white  m-5 ">
            <form className=" sm:w-96 pl-3 p-4 bg-gray-700 bg-opacity-70 rounded-xl border-gray-500 border-2 flex flex-col md:scale-125 md:m-10" onSubmit={handelSubmit}>
                
                {/* <select onChange={(e)=>setPart(e.target.value)}
                        className="p-2 m-4 text-xl"
                        value={part}
                        required
                >
                    <option value="">select body part</option>
                    
                    <option value="upper">upper body</option>
                    <option value="lower">lower body</option>
                    <option value="core">core</option>
                </select> */}
                <div className="flex flex-col w-44 justify-center ml-6">
                    <label className="text-center flex font-bold ">Date</label>
                    <input  type="Date"
                            
                            value={date}
                            onChange={(e)=>{setDate(e.target.value)}}
                            required
                            className="p-2 text-gray-400 m-4 border-2 border-black rounded-xl"
                            />
                </div>
                <div className=" flex gap-2 justify-evenly ">

                    <div className="flex flex-col justify-center ">


                        <label className="font-bold ">Upper body</label>
                        <input  type="number"
                                placeholder="Min"
                                value={upper}
                                onChange={(e)=>{setUpper(e.target.value)}}
                                required
                                className="p-2 m-2 border-2 text-gray-400  border-black rounded-xl w-16"
                                />
                    </div>
                    <div className="flex flex-col justify-center">


                        <label className="font-bold ">Lower body</label>
                        <input  type="number"
                                
                                value={lower}
                                onChange={(e)=>{setLower(e.target.value)}}
                                required
                                placeholder="Min"
                                className="p-2 m-2 border-2 text-gray-400  border-black rounded-xl w-16"
                                />
                    </div>
                    <div className="flex flex-col justify-center">


                        <label className="font-bold ">Core</label>
                        <input  type="number"
                                        
                                value={core}
                                onChange={(e)=>{setCore(e.target.value)}}
                                required
                                placeholder="Min"
                                className="p-2 m-2 border-2 text-gray-400  border-black rounded-xl w-16"
                                />
                    </div>
                </div>
                <div className="flex justify-end pr-3 mt-7">

                        <button 
                        className=" shadow-orange-600 hover:shadow-lg shadow-sm hover:shadow-orange-500 w-32 bg-gray-500 rounded-xl p-2 hover:bg-gray-800 transform duration-300 active:scale-95 text-white font-bold text-2xl hover:scale-105 md:scale-75 md:active:scale-75"
                        type='submit'
                        >Submit</button>
                </div>
            </form>
        </div>
        
     </div>
    )
}
export default GraphInput;