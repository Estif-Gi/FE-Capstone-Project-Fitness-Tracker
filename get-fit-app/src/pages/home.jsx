import Graph from "./graph"
import WorkOutList from "./workOutList";
const Home = () => {
    return ( 
        <div className="sm:flex items-center justify-center">
           <div className="flex flex-col justify-self-center mt-2">
            <h1 className="font-bold text-white text-4xl mb-2 flex justify-center">progress chart</h1>
            <Graph/>
           </div>
           <div>
            <WorkOutList/>
           </div>
            
        </div>
     );
}
 
export default Home;