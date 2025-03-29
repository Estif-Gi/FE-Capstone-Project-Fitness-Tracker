import UseStore from "../stores/store"
import { useState } from "react";
import WorkOutList from "./workOutList";
const AddWorkout = () => {

    
        const [workOutName , setWorkOutName] = useState('');
        const [weight , setWeight] = useState('');
        const [reps , setReps] = useState('');
        const [sets , setSets] = useState('')
        const addWorkOteNames = UseStore((state)=>state.addWorkOteNames);
   
        const handelSubmit = () =>{
            if(!workOutName || !weight || !reps || !sets) {alert("please enter the name of the exercise"); return}
            addWorkOteNames({
                id:Date.now(),
                workOutName:workOutName,
                weight:weight,
                reps:reps,
                sets:sets,
            })
            setWorkOutName("");
            setWeight("");
            setReps("");
            setSets("");
        }
    

    return ( 
        <div>
            <div className="bg-opacity-80 flex flex-col justify-self-center pl-6 pr-6 bg-gray-700 m-5 rounded-2xl shadow-2xl relative md:w-96">
                <h1 className="text-white font-bold text-2xl text-center mt-4 ">Create your own exercise list</h1>
                <input type="text"
                        placeholder="exercise name" 
                        onChange={(e)=>setWorkOutName(e.target.value)}
                        value={workOutName}
                        className="border-black flex justify-self-center m-8 mt-5 border-2 rounded-xl p-2 "
                        required
                />
                <div className="flex justify-center gap-8">
                    <input type="number" 
                            placeholder="Rep" 
                            onChange={(e)=>setReps(e.target.value)}
                            value={reps}
                            className="border-gray-900 flex justify-self-center  border-2 rounded-xl p-2 w-16"
                            required
                            />
                    <input type="number" 
                            placeholder="Sets" 
                            onChange={(e)=>setSets(e.target.value)}
                            value={sets}
                            className="border-gray-900 flex justify-self-center  border-2 rounded-xl p-2 w-16"
                            required
                            />
                    <input type="text" 
                            placeholder="weight" 
                            onChange={(e)=>setWeight(e.target.value)}
                            value={weight}
                            className="border-gray-900 flex justify-self-center border-2 rounded-xl p-2 w-20"
                            required
                            />
                </div>

                <button onClick={handelSubmit}
                        className=" text-orange-600 font-bold text-3xl mt-6 flex justify-end "

                        >Add</button>
                <br/>
                
                
            </div>
            <div>
                <WorkOutList/>
            </div>
        </div>
     );
}
 
export default AddWorkout;