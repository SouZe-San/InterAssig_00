import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
// import useRefreshToken from "./useRefreshToken";
import useAuth from "./userAuth.hook";

const useAxiosPrivate = () => {
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers.Authorization = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [auth.accessToken]);

  return axiosPrivate;
};

export default useAxiosPrivate;
