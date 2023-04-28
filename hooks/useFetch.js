import { useState, useEffect } from 'react';
import axios from 'axios';
import { Rapid_API_Key } from '@env';

const rapidApiKey = Rapid_API_Key;

export default useFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    config: {
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
      params: { ...query },
    },
  };

  console.log(options);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      axios
        .get(options.url, options.config)
        .then(function (response) {
          setData(response.data.data);
        })
        .catch(function (error) {
          setError(error);
        });
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("Couldn't find any jobs");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //refetch the data if needed
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
