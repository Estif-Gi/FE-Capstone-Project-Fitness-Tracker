import { useState ,useEffect } from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";
const Ninja = () =>{
  
  const [data , setData] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);


    const fetchExercises = async() => {
      

        try { 
          const url = "https://api.api-ninjas.com/v1/exercises/";
          const response  = await fetch(url , {
            headers: {
              "X-Api-Key": "Z8bryQHXv9Z+x+Hx9Xuzig==g0DGUoXocErMSsNQ"
            }})
          if(!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`)}
              
          const result = await response.json();
          // console.log(result)
          setData(result)
        }
        catch(error) {
          console.error("Fetch failed" , error)
        }
      
  }

  useEffect(()=>{
    fetchExercises();
  } , []);

  const toggleDetails =( index ) => {
    setExpandedItem(expandedItem === index ? null : index)
  }



      
      return ( 
        <div className="relative">
         
          <Link to="/addWorkout"><button className="m-4 mr-10 h-20 w-44 text-2xl flex justify-self-end border-2 rounded-xl p-2 font-semibold bg-blue-900 text-white active:scale-105 hover:bg-blue-800">Add your own Workouts</button>
          </Link>
          
          <ul className="sm:grid sm:grid-cols-2 md:grid-cols-3">
              {data.length > 0 ? (
                data.map((item, index) => (
                  
                  <li key={index} className=" bg-blue-200 border-2 rounded-xl m-3 p-2 bg-opacity-75 text-lg">
                      <span className="font-bold">{item.name}</span> 
                      <span><br/>For: {item.muscle}</span><br/>
                      <button className="flex justify-self-end mr-3 border-2 rounded-xl p-2 font-semibold bg-blue-900 text-white active:scale-105 hover:bg-blue-800"
                              onClick={()=>{toggleDetails(index)}}>
                        {expandedItem === index ? "Hide Details" : "Show Details"}
                      </button>
                      {expandedItem === index && (
                      <div className="mt-2 text-lg text-gray-900">
                        <p>
                          <strong>Difficulty:</strong> {item.difficulty}
                        </p>
                        <p>
                          <strong>Instructions:</strong> {item.instructions}
                        </p>
                      </div>
              )}
                    </li>
                  
                ))
              ) : (
                <div className="text-4xl text-white flex justify-self-center absolute top-44 left-44  ">Loading...</div>
              )}
          </ul>
        </div>
      );
    }
  
export default Ninja;