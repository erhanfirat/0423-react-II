import { useState } from "react";
import axios from "axios";

export const useAxios = (endpoint, reqType = "get", reqParam) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  function doRequest() {
    setLoading(true);
    axios[reqType](endpoint, reqParam)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return [data, doRequest, loading, error];
};
