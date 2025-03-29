import { useStore } from "zustand";
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
        setCore([0]);
        setLower([0]);
        setUpper([0])
        setDate("");
    }


    return (
     <div>
        <form onSubmit={handelSubmit}>
            
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

            <input  type="Date"
                    
                    value={date}
                    onChange={(e)=>{setDate(e.target.value)}}
                    required
                    className="p-2 m-4 border-2 border-black rounded-xl"
            />
            <input  type="number"
                    placeholder="Exercise duration (minutes)"
                    value={upper}
                    onChange={(e)=>{setUpper(e.target.value)}}
                    required
                    className="p-2 m-4 border-2 border-black rounded-xl"
                    />
            <input  type="number"
                    
                    value={lower}
                    onChange={(e)=>{setLower(e.target.value)}}
                    required
                    className="p-2 m-4 border-2 border-black rounded-xl"
            />
            <input  type="number"
                            
                    value={core}
                    onChange={(e)=>{setCore(e.target.value)}}
                    required
                    className="p-2 m-4 border-2 border-black rounded-xl"
            />

            <button 
            className=" bg-green-600 text-white font-extrabold text-2xl p-2 m-4 border-2 border-black rounded-xl"
            type='submit'
            >
                Submit</button>
        </form>
        <Graph/>
     </div>
    )
}
export default GraphInput;