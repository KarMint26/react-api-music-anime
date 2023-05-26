import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getDataFromAPI } from "../api";

const CustomHooks = (query) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getDataFromAPI()
        .then((res) => {
          setResponse((prev) => res.data.data);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          console.log(err.message);
          setError(true);
        });
    }, 3000);
  }, []);

  return { loading, error, response };
};

export default CustomHooks;
