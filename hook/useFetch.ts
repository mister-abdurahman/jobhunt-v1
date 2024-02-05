import { useEffect, useState } from "react";
import axios from "axios";

import { RAPID_API_KEY } from "@env";

const apiKey = RAPID_API_KEY;

// export const useTestFetch = async () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // 
// const options = {
//   method: 'GET',
//   url: 'https://jsearch.p.rapidapi.com/search',
//   params: {
//     query: 'Python developer in Texas, USA',
//     page: '1',
//     num_pages: '1'
//   },
//   headers: {
//     'X-RapidAPI-Key': '1e48a2644cmsh22ecfc743dd90f7p146f31jsna1b7cf1d993e',
//     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
//   // 
//   return { data, isLoading, error };
// };

// useTestFetch()

export const useFetch = (
  endpoint: string,
  query: { query?: string; page?: string; num_pages?: string; job_id?: string }
) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '1e48a2644cmsh22ecfc743dd90f7p146f31jsna1b7cf1d993e',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error: { message: string }) {
      alert("an error occured");
      setError(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(function () {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
