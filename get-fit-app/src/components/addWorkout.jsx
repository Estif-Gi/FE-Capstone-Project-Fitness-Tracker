import UseStore from "../stores/store"
import { useState } from "react";
import WorkOutList from "./workOutList";
import { useEffect ,useCallback } from "react";

const AddWorkout = () => {

    
        const [workOutName , setWorkOutName] = useState('');
        const [weight , setWeight] = useState('');
        const [reps , setReps] = useState('');
        const [sets , setSets] = useState('')
        
        const addWorkOteNames = UseStore((state)=>state.addWorkOteNames);
        const setSearchTerm = UseStore((state) => state.setSearchTerm);
        const searchTerm = UseStore((state) => state.searchTerm);
        const FilterExercise = UseStore((state) => state.FilterExercise);
        
        const handleFilter = useCallback(() => {
            FilterExercise();
          }, [searchTerm]);

        useEffect(()=>{
            handleFilter();
        }, [searchTerm, FilterExercise ])

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
            <div className="md:flex lg:items-center lg:justify-center md:mt-5">
            <div className="md:flex md:flex-col-reverse md:items-end md:mt-  ">
                <div className="border-2 border-gray-400 bg-opacity-80 flex flex-col justify-self-center pl-6 pr-6 bg-gray-700 m-5 rounded-2xl shadow-2xl relative md:w-96">
                    <h1 className="text-white font-bold text-2xl text-center mt-4 ">Create your own exercise list</h1>
                    <input type="text"
                            placeholder="exercise name" 
                            onChange={(e)=>{
                                const value = e.target.value
                                setWorkOutName(value.charAt(0).toUpperCase() + value.slice(1))}}
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
                            className=" text-orange-600 font-bold text-3xl mt-6 flex justify-end hover:text-orange-300 active:text-2xl transform duration-200"

                            >Add</button>
                    <br/>
                    
                    
                </div>
                <div className="">

                    <input  type="text"
                            placeholder="Search Exercise"
                            onChange={
                                (e) => {
                                    const value = e.target.value
                                    setSearchTerm(value.charAt(0).toUpperCase() + value.slice(1))}}
                                    value={searchTerm}
                                    className="flex border-black border-2 justify-self-center md:justify-self-end p-2  rounded-xl w-auto "
                                    />
                </div>
            

            </div>
            <div>
                <WorkOutList/>
            </div>
            
                
            </div>
        </div>
     );
}
 
export default AddWorkout;