import UseStore from "../stores/store";
const WorkOutList = () => {
    // const {  workOuts , removeWorkOut } = UseStore(
    //     (state)=>({
    //         workOuts: state.workOuts || [], 
    //         removeWorkOut:state.removeWorkOut,
    // }))

    const workOuts = UseStore((state)=>state?.workOuts || []);
    const removeWorkOut = UseStore((state)=>state?.removeWorkOut);
    const searchTerm = UseStore((state) => state.searchTerm);
    const FilteredExercise = UseStore((state) => state.FilteredExercise);

    const exerciseToDisplay = searchTerm ? FilteredExercise : workOuts

    if (!exerciseToDisplay || exerciseToDisplay.length === 0) {
        return <p className="text-gray-200 p-5">Workout dose not exist yet.</p>;
    }
    // console.log(workOuts);
    
    
    return(
        <ul className="flex flex-col flex-wrap justify-self-center ml-2 sm:grid sm:grid-cols-1 md: xl:grid-cols-3  " >
                
            {exerciseToDisplay.map((workOut )=>{
                return(

                        <li className="bg-opacity-75 shadow-xl flex items-center relative m-3 border-2 bg-blue-200 p-3 rounded-2xl border-gray-900 w-auto text-xl "
                            key={workOut.id}>
                            <span className="mr-3">{workOut.workOutName.trim()}</span> 
                            <span className="ml-auto mr-3 font-semibold">{workOut.reps}/{workOut.sets}</span>
                            <span className=" font-semibold ml-auto">{workOut.weight}</span>
                            <button 
                                className="hover:bg-blue-800 shadow-xl active:scale-90  ml-3 mr-2 border-2 bg-blue-900 rounded-xl p-2 text-white flex justify-end "
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