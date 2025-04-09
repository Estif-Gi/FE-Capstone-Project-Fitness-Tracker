import UseStore from "../stores/store";
import { useState } from "react";
import Graph from "../components/graph";


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
        setCore([0]);
        setLower([0]);
        setUpper([0])
        setDate("");
    }


    return (
     <div className="m-2 flex flex-col justify-center items-center md:flex-row md:justify-self-center md:items-center ">
        <Graph/>

        <div className="text-white flex justify-center ">
            <form className="m-5 sm:w-96 pl-3 p-4 bg-gray-700 bg-opacity-70 rounded-xl border-gray-500 border-2 flex flex-col md:scale- md:m-5 md:mt-8 md:mb-8" onSubmit={handelSubmit}>
                
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
                                className="p-2 m-2 border-2 text-gray-900  border-orange-500 rounded-xl w-16"
                                />
                    </div>
                    <div className="flex flex-col justify-center">


                        <label className="font-bold ">Lower body</label>
                        <input  type="number"
                                
                                value={lower}
                                onChange={(e)=>{setLower(e.target.value)}}
                                required
                                placeholder="Min"
                                className="p-2 m-2 border-2 text-gray-900  border-green-600 rounded-xl w-16"
                                />
                    </div>
                    <div className="flex flex-col justify-center">


                        <label className="font-bold ">Core</label>
                        <input  type="number"
                                        
                                value={core}
                                onChange={(e)=>{setCore(e.target.value)}}
                                required
                                placeholder="Min"
                                className="p-2 m-2 border-2 text-gray-900  border-blue-400 rounded-xl w-16"
                                />
                    </div>
                </div>
                <div className="flex justify-end pr-3 mt-7">

                        <button 
                        className=" shadow-orange-600 hover:shadow-lg shadow-sm hover:shadow-orange-500 w-32 bg-gray-500 rounded-xl p-2 hover:bg-gray-800 transform duration-300 active:scale-95 text-white font-bold text-2xl hover:scale-105 md:scale-75 "
                        type='submit'
                        >Submit</button>
                </div>
            </form>
        </div>
        
     </div>
    )
}
export default GraphInput;