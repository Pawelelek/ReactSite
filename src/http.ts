import axios from "axios";
import { APP_ENV } from "./env";

export const http = axios.create({
    baseURL: APP_ENV.BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export const formHttp = axios.create({
    baseURL: APP_ENV.BASE_URL,
    headers: {
        "Content-Type": "multipart/form-data"
    }
});