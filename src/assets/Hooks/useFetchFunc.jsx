import { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";

const useFetchFunc = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [controller, setController] = useState(null);
  const [reload, setReload] = useState(0);

  const fetchData = async (configObject) => {
    const { method, url, formData } = configObject;
    setReload((prev) => prev + 1);
    try {
      setIsLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);

      const res = await axiosClient[method.toLowerCase()](url, formData, {
        // signal: controller.signal,
      });
      setResponse(res.data);
      setError(null);
    } catch ({ response }) {
      setError(() => response && response.data);
      setResponse(null);
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller, reload]);

  return { response, isLoading, error, fetchData };
};

export default useFetchFunc;
