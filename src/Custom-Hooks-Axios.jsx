// Get window size Custom Hook
import axios from "axios";
import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const getWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    getWindowSize();

    window.addEventListener("change", getWindowSize);

    const cleanup = () => {
      window.removeEventListener("change", getWindowSize);
    };
    return cleanup;
  }, []);

  return windowSize;
};

export default useWindowSize;

/* --------------------------------
  USAGE 
  import useWindowSize from './filename';

  const { width } from useWindowSize // from windowSize variable
-------------------------------- */

/*
 **************************************************************************************************
 **************************************************************************************************
 */

// AXIOS FETCH
// import { useEffect, useState } from "react";
// import axios from "axios";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    let isMounted = true;

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const res = await axios.get(url, {
          // setup and headers here
          cancelToken: source.token,
        });

        if (isMounted) {
          setData(res.data);
          setError(null);
        }
      } catch (error) {
        if (error) {
          if (isMounted) {
            setError(error.Message);
            setData([]);
          }
        }
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 2000);
      }
    };

    fetchData(dataUrl);

    const cleanup2 = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanup2;
  }, []);

  return { data, error, isLoading };
};

// export default useAxiosFetch;

/* --------------------------------
  USAGE 
  import useAxiosFetch from './filename';

  const { data, error, isLoading } from useAxiosFetch('http://localhost:5050/posts')
-------------------------------- */

/*
 **************************************************************************************************
 **************************************************************************************************
 */

// AXIOS FETCH with reload
// import { useEffect, useState } from "react";
// import axios from "axios";

// Axios client File
//start
// import axios from 'axios'
const BASE_URL = "http://localhost:5050";

// export default axios.create{
const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// export defualt axiosClient

// end
const useAxios = (configObject) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObject;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(0);

  const refetch = () => setReload((prev) => prev + 1);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData2 = async () => {
      try {
        const ress = await axiosInstance[method].toLowerCase()(url, {
          ...requestConfig,
          signal: controller.signal,
        });

        setResponse(ress.date);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData2();

    return () => controller && controller.abort();
  }, [refetch]);

  return { response, error, isLoading, refetch };
};

// export default useAxios

/* --------------------------------
  USAGE 
  import useAxios from './filename';
  import axiosCLient form './filename';

  const { response, error, isLoading, refetch} from useAxios({
    axiosInstance: axiosClient,
    method: 'GET',
    url,'/post'
    requestConfig = {
      headers: {
        'content-language: 'en-US',
      },
      data: {
        name: 'John Smith',
        email: 'leeleslyank@gmai.com',
      }
    }
  })

  <button onclick(() => refetch())>Reload Joke || Get Joke</button>

  // JSX
  loadding  && echo Loading..
  !loading && error && echo error
  !loading && !error && jokes && echo jokes
  !loading && !error && !jokes && echo no jokes
-------------------------------- */

/*
 **************************************************************************************************
 **************************************************************************************************
 */

// AXIOS FETCH
// import { useEffect, useState } from "react";
// import axios from "axios";

/*
 **************************************************************************************************
 **************************************************************************************************
 */

// AXIOS FETCH with reload
// import { useEffect, useState } from "react";
// import axios from "axios";

// Axios client File
//start
// import axios from 'axios'
const BASE_URL2 = "http://localhost:5050";

// export default axios.create{
const axiosClient2 = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// export defualt axiosClient

// end
const useAxiosFunction = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [controller, setController] = useState();

  const fetchData = async (configObject) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObject;

    try {
      const ctrl = new AbortController();
      setController(ctrl);
      setIsLoading(true);

      const ress = await axiosInstance[method].toLowerCase()(url, {
        ...requestConfig,
        signal: controller.signal,
      });

      setResponse(ress.date);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return { response, error, isLoading, fetchData };
};

// export default useAxiosFunction

/* --------------------------------
  USAGE 
  import useAxiosFunction from './filename';
  import axiosCLient form './filename';

  const { response, error, isLoading, fetchData} from useAxios({
    axiosInstance: axiosClient,
    method: 'GET',
    url,'/post'
    requestConfig = {
      headers: {
        'content-language: 'en-US',
      },
      data: {
        name: 'John Smith',
        email: 'leeleslyank@gmai.com',
      }
    }
  })

  // Custom function to handle submit data

  const handleSubmit = () => {
    fetchData({
      axiosInstance: axiosClient,
      method: 'POST',
      url,'/create'
      requestConfig = {
        headers: {
          'content-language: 'en-US',
        },
        data: JSON.strigigy(formData)
    })
  }

  <button onclick(() => refetch())>Reload Joke || Get Joke</button>

  // JSX
  loadding  && echo Loading..
  !loading && error && echo error
  !loading && !error && jokes && echo jokes
  !loading && !error && !jokes && echo no jokes
-------------------------------- */

/*
 **************************************************************************************************
 **************************************************************************************************
 */

// AXIOS FETCH
// import { useEffect, useState } from "react";
// import axios from "axios";
