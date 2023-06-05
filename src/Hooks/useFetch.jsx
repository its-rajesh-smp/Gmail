import axios from "axios";
import { useEffect, useState } from "react";
import { USERS } from "../Firebase/API_URL";

const useFetch = (path) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: mailData } = await axios.get(`${USERS}/${path}.json`);
        setData(mailData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [path]);

  return data;
};

export default useFetch;
