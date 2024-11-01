import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestuarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);

      // Check if the response status is OK (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      // Check if `json.data` exists before setting it
      if (json?.data) {
        setResInfo(json.data);
      } else {
        console.warn("No menu data found in the response");
      }
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  return resInfo;
};

export default useRestuarantMenu;
