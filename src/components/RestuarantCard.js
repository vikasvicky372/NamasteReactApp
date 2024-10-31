import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  console.log(props);
  return (
    <div className="p-2 m-4 bg-gray-100 rounded-md w-[200px] shadow-lg hover:bg-orange-100">
      <img
        className="h-[200px] w-[200px] rounded-md"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="my-2 font-semibold text-base font-sans">{name}</h3>
      <h4 className=" text-sm">{cuisines.join(", ")}</h4>
      <h4 className="text-sm">{avgRating}⭐</h4>
      <h4 className="text-sm">{costForTwo}</h4>
      <h4 className="text-sm">{sla?.slaString}</h4>
    </div>
  );
};

export const withOfferLabel = (RestuarantCard) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <h5
          className="absolute mx-2 px-2 bg-blue-700 text-white rounded-md"
        >
          {header} {subHeader}
        </h5>
        <RestuarantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;
