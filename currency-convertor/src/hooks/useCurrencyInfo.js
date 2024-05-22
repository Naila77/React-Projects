import { useEffect } from "react";
import { useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cors-anywhere.com/<v6.exchangerate-api.com/v6/0cb8e4e0b0f7d15497b2f8ab/latest/USD>.json`
      
    )
      .then((res) =>{ res.json()
      console.log(res.json())})
      .then((res) => setData(res['USD']));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
