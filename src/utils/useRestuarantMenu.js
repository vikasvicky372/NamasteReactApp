import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestuarantMenu = (resId) => {

    //console.log("returned resInfo");
    const[resInfo,setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu =async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        //console.log(json);
        setResInfo(json.data);
    }
    //console.log("returned resInfo");
    return resInfo;
}

export default useRestuarantMenu;