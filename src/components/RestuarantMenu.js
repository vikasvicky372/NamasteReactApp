import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestuarantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();
  console.log(resId);

  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- Rs.
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestuarantMenu;
