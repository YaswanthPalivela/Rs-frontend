import { useState } from "react";
import Table from '../Components/Table';
import BarChartComponent from "./BarCharComponent";
import PieChartComponent from "./PieChart";
import Statistics from "./Statistics";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [month, setMonth] = useState("03");

  const changeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const changeMonthsInTable = (e) => {
    setMonth(e.target.value);
    setSearchValue("");
  };

  return (
    <div className="flex flex-col items-center h-screen w-full overflow-auto">
      <h1 className="font-sans text-lg text-black font-bold mb-14">All Transctions Details</h1>
      <div className="flex width-[90%] items-center justify-between mb-7">
        <input
          type="search"
          placeholder="Search"
          className=" w-[400px] h-[45px] text-center border-2 rounded-xl border-black mx-4 text-xl"
          onChange={changeSearchValue}
          value={searchValue}
        />
        <select
          className='border-2 border-black p-2 rounded-xl text-black cursor-pointer '
          onChange={changeMonthsInTable}
          value={month}
        >
          <option value={"01"}>Jan</option>
          <option value={"02"}>Feb</option>
          <option value={"03"}>Mar</option>
          <option value={"04"}>Apr</option>
          <option value={"05"}>May</option>
          <option value={"06"}>June</option>
          <option value={"07"}>July</option>
          <option value={"08"}>Aug</option>
          <option value={"09"}>Sept</option>
          <option value={"10"}>Oct</option>
          <option value={"11"}>Nov</option>
          <option value={"12"}>Dec</option>
        </select>
      </div>
      <Table month={month} searchValue={searchValue} />
      <BarChartComponent month={month} />
      <PieChartComponent month={month} />
      <Statistics month={month} />
    </div>
  );
};
export default Home;
