import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";

const RestuarantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestuarantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);

  return (
    <div className="text-center">
      <h1 className="my-4 py-4 text-2xl font-bold">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines} - {costForTwoMessage}
      </p>
      {
        categories.map(category => <RestuarantCategory key={category?.card?.card?.title} data={category}/>)
      }
    </div>
  );
};

export default RestuarantMenu;
