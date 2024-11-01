import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useState } from "react";

const RestuarantCategory = (props) => {
  //console.log(props);
  const { title,itemCards} = props?.data?.card?.card;
  const {showItems,setShowIndex} = props;
 // const [showItems,setShowItems] = useState(false);
const handleClick = () =>{
    //setShowItems(!showItems);
    setShowIndex();
}

  return (
    <div className="p-2 my-4 bg-gray-100 m-auto w-6/12 rounded-lg shadow-lg">
      <div className="flex justify-between hover:cursor-pointer" onClick={handleClick} >
        <span className="font-bold text-lg">{title} ({itemCards.length})</span>
        <span>
          {showItems?<FaChevronDown />: <FaChevronUp/>}
        </span>
      </div>

      <div>
        {
           showItems && itemCards.map(item => <ItemCard key= {item?.card?.info?.id}data={item}/>)
        }
      </div>
    </div>
  );
};

export default RestuarantCategory;
