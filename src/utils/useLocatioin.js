import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const requestOptions = {
        method: "GET",
      };
      const response = await fetch(
        "https://api.geoapify.com/v1/ipinfo?&apiKey=a98d268308e344ea985fe8bd455b5d61",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      setLocation(json);
    } catch (error) {
      console.error("Failed to fetch location:", error);
    }
  };

  return location;
};

export default useLocation;
