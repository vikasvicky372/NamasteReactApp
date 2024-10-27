import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restuarantList, setRestuarantList] = useState([]);
  const [filteredRestuarantList, setFilteredRestuarantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setFilteredRestuarantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestuarantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
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
    <div className="body-container">
      <div className="container">
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              e.key === "Enter" ? searchLogic() : "";
            }}
          ></input>
          <button className="searchBtn" onClick={searchLogic.bind(this)}>
            Search
          </button>
        </div>
        <div className="filter-container">
          <button
            className="filter"
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
            className="filter"
            onClick={() => {
              setFilteredRestuarantList(resList);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestuarantList.map((restuarant) => (
          <Link className= "resLink"to={"/restuarants/"+restuarant.info.id}><RestuarantCard key={restuarant.info.id} resData={restuarant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;