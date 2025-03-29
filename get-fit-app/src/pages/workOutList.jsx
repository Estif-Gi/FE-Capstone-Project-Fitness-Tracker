import UseStore from "../stores/store";
import { Fragment } from "react";
const WorkOutList = () => {
    // const {  workOuts , removeWorkOut } = UseStore(
    //     (state)=>({
    //         workOuts: state.workOuts || [], 
    //         removeWorkOut:state.removeWorkOut,
    // }))

    const workOuts = UseStore((state)=>state?.workOuts || []);
    const removeWorkOut = UseStore((state)=>state?.removeWorkOut);
 

    if (!workOuts || workOuts.length === 0) {
        return <p className="text-gray-500 pl-2">No workouts added yet.</p>;
    }
    console.log(workOuts);

    
    return(
        <ul className="flex flex-col flex-wrap justify-self-center ml-2 sm:grid sm:grid-cols-2 lg:grid-cols-3" >
                
            {workOuts.map((workOut )=>{
                return(

                        <li className="bg-opacity-75 shadow-xl flex items-center relative m-3 border-2 bg-blue-200 p-3 rounded-2xl border-gray-900 w-auto text-xl "
                            key={workOut.id}>
                            <span className="mr-3">{workOut.workOutName }</span> <span className="ml-auto mr-3 font-semibold">{workOut.reps}/{workOut.sets}</span> <span className=" font-semibold ml-auto">{workOut.weight}</span>
                            <button 
                                className=" shadow-xl active:scale-90  ml-3 mr-2 border-2 bg-blue-900 rounded-xl p-2 text-white flex justify-end "
                                onClick={()=>{
                                    removeWorkOut(workOut.id) 
                                }}
                                >Delete </button>
                            
                            
                        </li>

                    
                )
            }
            )}
            
        </ul>
    )
}

export default WorkOutList;