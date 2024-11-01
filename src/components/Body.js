import RestuarantCard, {withOfferLabel} from "./RestuarantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [restuarantList, setRestuarantList] = useState([]);
  const [filteredRestuarantList, setFilteredRestuarantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestuarantCardWithOffer = withOfferLabel(RestuarantCard);

  //console.log("rest list",restuarantList);

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    setFilteredRestuarantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestuarantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(!onlineStatus) return (<h1>Looks like your internet connection is off</h1>);
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
          <input className="mr-1 border border-solid border-black rounded-sm"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              e.key === "Enter" ? searchLogic() : "";
            }}
          ></input>
          <button className="p-2 px-4 rounded-md bg-green-100" onClick={searchLogic.bind(this)}>
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
        </div>
      </div>

      <div className="mt-2  flex flex-wrap">
        {filteredRestuarantList.map((restuarant) => (
          <Link className="resLink" to={"/restuarants/" + restuarant.info.id} key={restuarant.info.id}>

            {
              restuarant?.info?.aggregatedDiscountInfoV3 ? <RestuarantCardWithOffer resData={restuarant}/> : <RestuarantCard resData={restuarant} />
            }
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
