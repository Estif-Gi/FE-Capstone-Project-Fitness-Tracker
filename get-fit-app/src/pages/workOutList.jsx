import UseStore from "./store";
import { Fragment } from "react";
const WorkOutList = () => {
    // const {  workOuts , removeWorkOut } = UseStore(
    //     (state)=>({
    //         workOuts: state.workOuts || [], 
    //         removeWorkOut:state.removeWorkOut,
    // }))

    const workOuts = UseStore((state)=>state?.workOuts || []);
    const removeWorkOut = UseStore((state)=>state?.removeWorkOut) 


    if (!workOuts || workOuts.length === 0) {
        return <p className="text-gray-500">No workouts added yet.</p>;
    }
    
    return(
        <ul>
                
            {workOuts.map((workOut , i)=>{
                return(
                    
                        <li key={i}>
                            {workOut.workOutName } 
                            <button 
                                className="ml-3 border-2 bg-green-600 rounded-xl p-2 text-white "
                                onClick={()=>{
                                    removeWorkOut(workOut.id) 
                                }}
                            >delete </button>
                        </li>

                    
                )
            }
            )}
            
        </ul>
    )
}

export default WorkOutList;