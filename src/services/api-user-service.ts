import axios from "axios"
import { APP_ENV } from "../env";
const instance = axios.create({
    baseURL: APP_ENV.BASE_URL+"api/User",
    headers: {
        "Content-Type" : "application/json"
    }
})

instance.interceptors.request.use(
    (config: any) => {
      const token = getAccessToken();
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
      if (err.response) {
        if (err.response.status === 400 && err.response.data) {
          return Promise.reject(err.response.data);
        }
        if (
          err.response.status === 401 &&
          !originalConfig._retry &&
          getAccessToken() != null
        ) {
          originalConfig._retry = true;
          try {
            const rs = await refreshAccessToken();
            const { accessToken, refreshToken } = rs.data;
            const persist = shouldPersist();

          setRefreshToken(refreshToken, persist);
          setAccessToken(accessToken, persist);
            instance.defaults.headers.common["Authorization"] =
              "Bearer " + accessToken;
            return instance(originalConfig);
          } catch (_error: any) {
            if (_error.response && _error.response.data) {
              return Promise.reject(_error.response.data);
            }
            return Promise.reject(_error);
          }
        }
        if (err.response.status === 403 && err.response.data) {
          return Promise.reject(err.response.data);
        }
        if (err.response.status === 404) {
          if (axios.isAxiosError(err)) {
            return Promise.reject(err.response.data);
          }
          return;
        }
      }
      return Promise.reject(err);
    }
  );

  function shouldPersist(): boolean {
    const persist = window.localStorage.getItem("rememberMe") === "true";
    return persist;
  }


const responseBody: any = (response: any) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then().then(responseBody),
    post: (url: string, body?: any) => instance.post(url, body).then().then(responseBody),
    put: (url: string, body?: any) => instance.put(url,body).then().then(responseBody),
    delete: (url: string) => instance.delete(url).then().then(responseBody)
}

const User = {
    login: (user: any) => requests.post(`/login`, user),
    logout: (userId: string) => requests.get(`/logout?userId=` + userId),
    getallusers: () => requests.get(`/GetAll`),
    deletebyid: (userId: string) => requests.delete(`/DeleteById?id=` + userId),
    create: (user: any) => requests.post(`/Create`, user),
    update: (user: any) => requests.put(`/UpdatePersonalInfo`, user),
    getbyid: (userId: string) => requests.get(`/GetById?Id=` + userId)
}

export async function login(user: any){
    const data = await User.login(user)
    .then((response) => {
        return {
            response
        }
    })
    .catch((error) => {
        return error.response
    } )
    return data
}

export async function logout(userId: string){
    const data = await User.logout(userId)
    .then((response) => { 
      return {
            response
        }
    })
    .catch((error) => {
        return error.response
    } )
    return data
}

export async function createUser(user: any){
  const data = await User.create(user)
  .then((response) => { 
    return {
          response
      }
  })
  .catch((error) => {
      return error.response
  } )
  return data
}

export async function getallusers(){
  const data = await User.getallusers()
  .then((response) => {
      return {
          response
      }
  })
  .catch((error) => {
      return error.response
  } )
  return data
}

export async function getbyid(userId: string){
  const data = await User.getbyid(userId)
  .then((response) => { 
    return {
          response
      }
  })
  .catch((error) => {
      return error.response
  } )
  return data
}

export async function updateUser(user: any){
  const data = await User.update(user)
  .then((response) => { 
    return {
          response
      }
  })
  .catch((error) => {
      return error.response
  } )
  return data
}

export async function deletebyid(userId: string){
  const data = await User.deletebyid(userId)
  .then((response) => { 
    return {
          response
      }
  })
  .catch((error) => {
      return error.response
  } )
  return data
}

function refreshAccessToken() {
    console.log("refreshAccessToken");
    return instance.post("/RefreshToken", {
      token: getAccessToken(),
      refreshToken: getRefreshToken(),
    });
  }

export function setAccessToken(token: string, persist: boolean) {
  if (persist) {
    window.localStorage.setItem("accessToken", token);
  } else {
    window.sessionStorage.setItem("accessToken", token);
  }
}

export function setRefreshToken(refreshToken: string, persist: boolean) {
  if (persist) {
    window.localStorage.setItem("refreshToken", refreshToken);
  } else {
    window.sessionStorage.setItem("refreshToken", refreshToken);
  }
}

export function getAccessToken(): null | string {
  const token = window.localStorage.getItem("accessToken") || window.sessionStorage.getItem("accessToken");
  return token;
}

export function getRefreshToken(): null | string {
  const token = window.localStorage.getItem("refreshToken") || window.sessionStorage.getItem("refreshToken");
  return token;
}

export function removeTokens() {
  window.localStorage.removeItem("accessToken");
  window.localStorage.removeItem("refreshToken");
  window.sessionStorage.removeItem("accessToken");
  window.sessionStorage.removeItem("refreshToken");
}