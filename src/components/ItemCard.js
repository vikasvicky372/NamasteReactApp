import { Default_Image } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
const ItemCard = (props) => {
  (props);
  const { name, description, imageId } = props?.data?.card?.info;
  const showImage = imageId? (CDN_URL+imageId): Default_Image;
  return (
    <div className="py-2 m-2 text-left border-b-2 text-base flex justify-between ">
      <div className="w-9/12">
        <div>{name}</div>
        ₹ <span>
          {props?.data?.card?.info.defaultPrice
            ? props?.data?.card?.info.defaultPrice / 100
            : props?.data?.card?.info.price / 100}
        </span>
        <p className="text-sm text-gray-500">
        {description}
      </p>
      </div>
      <div className="w-3/12">
      <div className="absolute">
      <button className="p-2 mx-6 bg-green-50 text-green-600 text-center rounded-md shadow-lg hover:bg-">Add +</button>
      </div>
        <img className="m-auto w-8/12" src={showImage} />
      </div>
      
    </div>
  );
};

export default ItemCard;
