import React from 'react';
import {BarChart, Bar, XAxis, YAxis, ResponsiveContainer} from 'recharts';



const RatingsChart = ({app}) => {
    const data = [...app.ratings].reverse();
  return (
    <div className="w-full max-w-[1440px] mx-auto h-64 p-4 bg-white rounded-lg">
      
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          
          <XAxis 
            type="number" 
            domain={[0, 9000]} 
            tickCount={6}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'black', fontSize: 12 }}
          />

          
          <YAxis 
            dataKey="name" 
            type="category" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'black', fontSize: 13 }}
            width={60}
          />

          <Bar 
            dataKey="count" 
            fill="orange" 
            barSize={24}
          >
            
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;