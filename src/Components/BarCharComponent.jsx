import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ month }) => {
  const [barChartData, setBarChart] = useState([]);

  useEffect(() => {
    getBarData();
  }, [month]);

  const getBarData = async () => {
    const response = await fetch(
      `https://backend-assignment-of-roxiler-systems.onrender.com/barChart?month=${month}`
    );
    if (response.ok) {
      const data = await response.json();
      setBarChart(data);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <h1 className=" font-serif text-lg text-black font-bold mb-14 items-start">
        Bar Chart
      </h1>

      <ResponsiveContainer width="80%" height={400} data-aos="zoom-in">
        <BarChart data={barChartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="countOf" fill="#1f77b4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
