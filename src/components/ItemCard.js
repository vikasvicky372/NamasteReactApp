import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Default_Image, VEG_ICON } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { VEG_ICON, NON_VEG_ICON } from "../utils/constants";

const ItemCard = ({ data }) => {
  //console.log(data);
  const { name, description, imageId, isVeg } = data;
  const icon = isVeg ? VEG_ICON : NON_VEG_ICON;
  const showImage = imageId ? CDN_URL + imageId : Default_Image;

  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  const handleAddItem = (item) =>{
    dispatch(addItem(item));
  }
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  }

  const { pathname } = useLocation();
  const cartPage = pathname === "/cart" ? true : false;

  return cartPage ? (
    <div className="py-2 m-2 text-left border-b-2 text-base flex justify-between">
      <div className="w-8/12">
        <div>{name}</div>₹{" "}
        <span>
          {data.defaultPrice ? data.defaultPrice / 100 : data.price / 100}
        </span>
        <div className="my-2 text-sm text-gray-500 w-5 h-5">
          <img src={icon}></img>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="w-4/12 relative">
        <img className="m-auto w-8/12 rounded-lg" src={showImage} alt={name} />
        {/* <button
          onClick={() => handleClick(data)}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-neutral-50 text-green-700 font-bold py-1 px-6 rounded-lg shadow-md hover:bg-neutral-300"
        >
          ADD
        </button> */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center bg-neutral-50 rounded-lg shadow-md">
          <button
            onClick={() =>{handleRemoveItem(data)}}
            className="px-2 py-1 text-green-700 font-bold hover:bg-neutral-300"
          >
            -
          </button>
          <span className="px-4 py-1">{data.quantity}</span>
          <button
            onClick={() =>{handleAddItem(data)}}
            className="px-2 py-1 text-green-700 font-bold hover:bg-neutral-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="py-2 m-2 text-left border-b-2 text-base flex justify-between">
      <div className="w-8/12">
        <div>{name}</div>₹{" "}
        <span>
          {data.defaultPrice ? data.defaultPrice / 100 : data.price / 100}
        </span>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="w-4/12 relative">
        <img className="m-auto w-8/12 rounded-lg" src={showImage} alt={name} />
        <button
          onClick={() => handleClick(data)}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-neutral-50 text-green-700 font-bold py-1 px-6 rounded-lg shadow-md hover:bg-neutral-300"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
