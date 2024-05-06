import { Component } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import TableRows from "./TableRows";

class Table extends Component {
  state = {
    pageNo: 1,
    limit: 5,
    tableData: [],
  };

  componentDidMount() {
    this.getTableData();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.searchValue !== prevProps.searchValue ||
      this.props.month !== prevProps.month
    ) {
      this.getTableData();
    }
  }

  getTableData = async () => {
    const { pageNo, limit } = this.state;
    const { searchValue, month } = this.props;
    const response = await fetch(
      `https://backend-assignment-of-roxiler-systems.onrender.com/getTableTransactions?search=${searchValue}&month=${month}&pageno=${pageNo}&limit=${limit}`
    );

    if (response.ok) {
      const data = await response.json();
      this.setState({ tableData: data });
    }
  };

  clickLeftArrow = () => {
    const { pageNo } = this.state;
    if (pageNo > 1) {
      this.setState(
        (eachValue) => ({ pageNo: eachValue.pageNo - 1 }),
        this.getTableData
      );
    }
  };

  clickRightArrow = () => {
    const { tableData, limit } = this.state;
    if (tableData.length === limit) {
      this.setState(
        (eachValue) => ({ pageNo: eachValue.pageNo + 1 }),
        this.getTableData
      );
    }
  };

  render() {
    const { pageNo, tableData, limit } = this.state;
    let isNxtInActive = "";
    if (tableData.length === 0 || tableData.length < limit) {
      isNxtInActive = "in-active";
    }
    return (
      <div className='flex flex-col w-[80%] mb-15 mt-7'>
        <h1 className='font-sans text-lg text-black font-bold mb-7 items-start'>Table</h1>
        <table className='w-full min-h-14 max-h-[400px] border-2 border-black overflow-scroll'>
          <thead>
            <tr className='border-2 border-black'>
              <th className="text-center border-2 border-black h-[40px]">ID</th>
              <th className="text-center border-2 border-black h-[40px]">TITLE</th>
              <th className="text-center border-2 border-black h-[40px]">PRICE</th>
              <th className="text-center border-2 border-black h-[40px]">DESCRIPTION</th>
              <th className="text-center border-2 border-black h-[40px]">CATEGOTY</th>
              <th className="text-center border-2 border-black h-[40px]">IMAGE</th>
              <th className="text-center border-2 border-black h-[40px]">SOLD</th>
              <th className="text-center border-2 border-black h-[40px]">DATEOFSALE</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((eachValue) => (
              <TableRows key={eachValue.id} eachRow={eachValue} />
            ))}
          </tbody>
        </table>
        <div className='flex item-center w-full justify-between'>
          <CgChevronLeft
            className={`w-15 h-10 font-sans text-xl cursor-pointer ${pageNo === 1 && ' text-gray-400'}`}
            onClick={this.clickLeftArrow}
          />
          <p className='w-[60px] h-[60px] font-sans text-lg font-black  flex items-center justify-center' data-aos="zoom-in">
            {pageNo}
          </p>
          <CgChevronRight
            className={`w-15 h-10 text-black cursor-pointer ${isNxtInActive}`}
            onClick={this.clickRightArrow}
          />
        </div>
      </div>
    );
  }
}

export default Table;
