import { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";

const PieChartComponent = ({ month }) => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    getPieData();
  }, [month]);

  const getPieData = async () => {
    const response = await fetch(
      `https://backend-assignment-of-roxiler-systems.onrender.com/pieChart?month=${month}`
    );
    if (response.ok) {
      const data = await response.json();
      setPieChartData(data);
    }
  };

  return (
    <div className='h-screen w-full flex flex-col items-center mt-14'>
      <h1 className='font-sans text-xl font-bold mb-8'>Pie Chart</h1>

      <ResponsiveContainer width="100%" height={600}>
        <PieChart>
          <Pie
            cx="50%"
            cy="60%"
            data={pieChartData}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="ItemsCount"
          >
            <Cell name="Jewelery" fill="#fecba6" />
            <Cell name="Men's clothing" fill="#b3d23f" />
            <Cell name="Electronics" fill="#a44c9e" />
            <Cell name="Women's clothing" fill="#42f5c5" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="bottom"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;