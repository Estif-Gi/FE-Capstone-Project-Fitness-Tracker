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
                workOuts: state.workOuts.filter((e)=>{ e.id !== workOutId})

            }))
        },

        addWeight:(weight) =>{
            set((state)=>({
                workOuts:[weight, ...state.workOuts]
            }))
        }




    }) , {name:"user's exercise"})
)

export default UseStore;
