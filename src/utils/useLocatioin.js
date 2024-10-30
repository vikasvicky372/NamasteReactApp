import { useEffect, useState } from "react"

const useLocation = () => {
    const [location,setLocation] = useState(null);

    useEffect(() => {
        fetchLocation();
    }, []);

    const fetchLocation = async () => {
        var requestOptions = {
            method: 'GET',
          };
          
          const response = await fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=a98d268308e344ea985fe8bd455b5d61", requestOptions)
          const json = await response.json()
          setLocation(json);
          console.log(json);
    }
    return location;
}

export default useLocation;