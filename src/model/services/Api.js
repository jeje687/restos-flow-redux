//@flow
import axios from "axios";

export const apiPlace = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/place",
    timeout: 5000
});

const PLACE_KEY = "AIzaSyDxoDihhxReOcp_E_gJ68RGljkHntFnvUM";

apiPlace.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        if(config.method === "get"){
            config.params = {
                ...config.params,
                ...{
                    key: PLACE_KEY
                }
            }
        }
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
