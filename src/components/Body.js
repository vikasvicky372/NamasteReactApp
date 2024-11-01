import RestuarantCard, { withOfferLabel } from "./RestuarantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restuarantList, setRestuarantList] = useState([]);
  const [filteredRestuarantList, setFilteredRestuarantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestuarantCardWithOffer = withOfferLabel(RestuarantCard);

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurants) {
        setFilteredRestuarantList(restaurants);
        setRestuarantList(restaurants);
      } else {
        console.warn("No restaurants found in the response");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const {loggedInUser,setUserName} = useContext(UserContext);

  if (!onlineStatus) return <h1>Looks like your internet connection is off</h1>;
  if (restuarantList.length === 0) {
    return <Shimmer />;
  }
  const searchLogic = () => {
    const filteredRestuarants = restuarantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestuarantList(filteredRestuarants);
  };

  return (
    <div className="mx-4 p-4">
      <div className=" p-2 m-2 flex ">
        <div className="mr-4 flex">
          <input
            className="mr-1 border border-solid border-black rounded-sm"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              e.key === "Enter" ? searchLogic() : "";
            }}
          ></input>
          <button
            className="p-2 px-4 rounded-md bg-green-100"
            onClick={searchLogic.bind(this)}
          >
            Search
          </button>
        </div>
        <div className="flex">
          <button
            className=" mr-4 p-2 px-4 rounded-md bg-green-100"
            onClick={() => {
              const filteredRestuarants = restuarantList.filter(
                (restuarant) => restuarant.info.avgRating > 4.5
              );
              setFilteredRestuarantList(filteredRestuarants);
            }}
          >
            Top Rated Restaurant
          </button>
          <button
            className="p-2 px-4 rounded-md bg-green-100"
            onClick={() => {
              setFilteredRestuarantList(resList);
            }}
          >
            Reset
          </button>
          <div className="py-2 pl-4">User:</div> <input
            className="mx-4 p-2 border border-solid border-black rounded-sm"
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value)
              //setSearchText(e.target.value);
            }}
            
          ></input>
        </div>
      </div>

      <div className="mt-2  flex flex-wrap">
        {filteredRestuarantList.map((restuarant) => (
          <Link
            className="resLink"
            to={"/restuarants/" + restuarant.info.id}
            key={restuarant.info.id}
          >
            {restuarant?.info?.aggregatedDiscountInfoV3 ? (
              <RestuarantCardWithOffer resData={restuarant} />
            ) : (
              <RestuarantCard resData={restuarant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
