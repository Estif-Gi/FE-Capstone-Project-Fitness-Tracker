'use client';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import UseStore from "../stores/store";

const Graph = () => {
    const graphInput = UseStore((state) => state.graphInput);

    


    return (
        <div className="bg-gray-800  border-gray-500 bg-opacity-70 border-2 w-fit p-4 rounded-xl  ">
            <AreaChart width={350} height={250} data={graphInput}>
                <CartesianGrid strokeDasharray="9 3" />
                <XAxis dataKey="date" />
                
                <Tooltip/>

                <Area  dataKey="upper" stroke="#ff7300" fill="rgba(255, 115, 0, 0.7)" />
                <Area  dataKey="lower" stroke="#5CB338" fill="rgba(92, 179, 56, 0.5)" />
                <Area  dataKey="core" stroke="#0088FE" fill="rgba(0, 136, 254, 0.7)" />
            </AreaChart>
        </div>
    );
}

export default Graph;
