const BASE_URL:
    string = process.env.REACT_APP_BASE_URL as string;
    
const GOOGLE_AUTH_CLIENT_ID:
    string = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID as string;

const APP_ENV = {
    GOOGLE_AUTH_CLIENT_ID: GOOGLE_AUTH_CLIENT_ID,
    BASE_URL: BASE_URL,
    API_URl: BASE_URL+"api/"
};

export { APP_ENV };