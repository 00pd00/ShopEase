import { useEffect, useState } from "react";


 const UseApi =  (resID) => {

    const [ApiData, setApiData] = useState(null)

    
    useEffect(() => {
        fetchdata();
    },[] )

    const fetchdata = async() => {
        const data = await fetch("https://api.escuelajs.co/api/v1/products")
        const json = await data.json()
        const dataWithId = json.filter(item => item.id === resID);
        setApiData(dataWithId)

    }


    return ApiData;
}

export default UseApi;