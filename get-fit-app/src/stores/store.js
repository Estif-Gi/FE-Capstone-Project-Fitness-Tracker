import { create } from "zustand";
import { persist } from "zustand/middleware";

const UseStore = create(
   persist (
        (set) => ({
        workOuts: [], 
        addWorkOteNames: (workOutNames) => {
            set((state)=>({
                workOuts: [workOutNames , ...state.workOuts]
            }))
        },

        removeWorkOut: (workOutId) => {
            set((state)=>({
                workOuts: state.workOuts.filter((e)=> e.id !== workOutId)

            }))
        },
        graphInput:[],
        addGraphInput:(bodyPart) => {
            set((state)=>({
                graphInput: [bodyPart , ...state.graphInput]
            }))
        },
        searchTerm:'',
        
        setSearchTerm: (term) => set({searchTerm: term}),

        FilteredExercise:[],

        FilterExercise:() => {
            set((state)=>({
                FilteredExercise:state.workOuts.filter((workout)=>
                    workout.workOutName.toLowerCase().includes(state.searchTerm.toLowerCase()) 
                ) 
            }))
        }
        


       




    }) , {name:"user's exercise"})
)

export default UseStore;
