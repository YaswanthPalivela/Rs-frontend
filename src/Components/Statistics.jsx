import { useEffect, useState } from "react";

const Statistics = ({ month }) => {
  const [statisitcData, setStatisitcData] = useState([]);

  useEffect(() => {
    getPieData();
  }, [month]);

  const getPieData = async () => {
    const response = await fetch(
      `https://backend-assignment-of-roxiler-systems.onrender.com/getStatistics?month=${month}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setStatisitcData(data);
    }
  };

  return (
    <div className=' h-screen w-full flex flex-col items-center mt-15 mb-10 p-5 '>
      <h1 className='font-sans text-2xl text-black font-bold mb-15 self-center mb-10'>Statistics</h1>
      <div className='w-2/4 h-[300px] border-8  flex flex-col justify-center items-center'>
        <div className="flex w-[50%] items-center justify-between mb-0  ">
          <p className="font-sans text-xl font-semibold  text-black">Total sale</p>
          <p className="font-sans text-xl font-semibold  text-black">{statisitcData.sumOfReslut}</p>
        </div>
        <div className="flex w-[50%] items-center justify-between mb-0  ">
          <p className="font-sans text-xl font-semibold  text-black">Total sold item</p>
          <p className="font-sans text-xl font-semibold  text-black">{statisitcData.numberSoldOfReslut}</p>
        </div>
        <div className="flex w-[50%] items-center justify-between mb-0  ">
          <p className="font-sans text-xl font-semibold  text-black">Total not sold item</p>
          <p className="font-sans text-xl font-semibold  text-black">{statisitcData.numberUnsoldOfReslut}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
