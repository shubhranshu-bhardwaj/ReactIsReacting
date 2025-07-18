// this is custom hook
// import { useState, useEffect } from "react";

// function useCurrencyInfo(currency){
//     const [data, setData] = useState({});
//     useEffect(() => {
//       fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]))
//     }, [currency])

//     console.log(data);
//     return data
    
// }


// export default useCurrencyInfo

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const endpoint = `v1/currencies/${currency}.json`;
    const primaryUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/${endpoint}`;
    const fallbackUrl = `https://latest.currency-api.pages.dev/${endpoint}`;

    const fetchRates = async () => {
      try {
        const res = await fetch(primaryUrl);
        if (!res.ok) throw new Error("Primary source failed");
        const json = await res.json();
        setData(json[currency]);
      } catch {
        try {
          const res = await fetch(fallbackUrl);
          if (!res.ok) throw new Error("Fallback source also failed");
          const json = await res.json();
          setData(json[currency]);
        } catch (err) {
          console.error("Error fetching exchange rates:", err);
          setData({});
        }
      }
    };

    fetchRates();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
