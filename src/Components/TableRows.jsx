import { React } from "react";

const RowOfTable = (props) => {
  const { id, title, price, description, category, image, sold, dateOfSale } =
    props.eachRow;
  return (
    <tr className='p-2 border2 border-black'>
      <td className="p-3 border-2 border-black">{id}</td>
      <td className="p-3 border-2 border-black">{title}</td>
      <td className="p-3 border-2 border-black">{price}</td>
      <td className="p-3 border-2 border-black">{description}</td>
      <td className="p-3 border-2 border-black">{category}</td>
      <td className="p-3 border-2 border-black">{image}</td>
      <td className="p-3 border-2 border-black">{sold}</td>
      <td className="p-3 border-2 border-black">{dateOfSale}</td>
    </tr>
  );
};

export default RowOfTable;
