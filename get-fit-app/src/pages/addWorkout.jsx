import UseStore from "./store"
import { useState } from "react";
import WorkOutList from "./workOutList";
const AddWorkout = () => {

    
        const [workOutName , setWorkOutName] = useState('');
        const addWorkOteNames = UseStore((state)=>state.addWorkOteNames);
   
        const handelSubmit = () =>{
            if(!workOutName) {alert("please enter the name of the exercise"); return}
            addWorkOteNames({
                id:Date.now(),
                workOutName:workOutName,
            })
            setWorkOutName("");
        }
    

    return ( 
        <div>
            <input type="text" 
                    onChange={(e)=>setWorkOutName(e.target.value)}
                    value={workOutName}
                    className="border-green-600 flex justify-self-center m-10 border-2 rounded-xl p-2 "
            />

            <button onClick={handelSubmit}
                    className="bg-green-600 text-white flex justify-self-center p-2 rounded-md"

            >Add workout</button>
            <br/>
            <br/>
            <div>
                <WorkOutList/>
            </div>
        </div>
     );
}
 
export default AddWorkout;