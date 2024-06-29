import axios from "axios"
import { toast } from "react-toastify";

const instance = axios.create({
    baseURL: "https://localhost:5001/api/User",
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
      //window.location.reload();
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
        // Validation failed, ...
        if (err.response.status === 400 && err.response.data) {
          return Promise.reject(err.response.data);
        }
        // Access Token was expired
        if (
          err.response.status === 401 &&
          !originalConfig._retry &&
          getAccessToken() != null
        ) {
          originalConfig._retry = true;
          try {
            const rs = await refreshAccessToken();
            const { accessToken, refreshToken } = rs.data;
            setRefreshToken(refreshToken);
            setAccessToken(accessToken);
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


const responseBody: any = (response: any) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then().then(responseBody),
    post: (url: string, body?: any) => instance.post(url, body).then().then(responseBody)
}

const User = {
    login: (user: any) => requests.post(`/login`, user),
    logout: (userId: string) => requests.get(`/logout?userId=` + userId),
    getallusers: () => requests.get(`/GetAll`),
    deletebyid: (userId: string) => requests.post(`/DeleteById?id=` + userId),
    create: (user: any) => requests.post(`/Create`, user),
    convertandfetchvideo: (link: string, userId: string) => requests.post(`/ConvertAndFetchVideo?userId=${userId}`, link),
    getsongs: (userId: string) => requests.get(`/GetSongs?userId=` + userId),
    deletesong: (songId: number) => requests.post(`/DeleteSong?songId=${songId}`)
}

export async function deletesong(songId: number) {
  const data = await User.deletesong(songId);
  //console.log("data", data);
  return data;
}

export async function convertandfetchvideo(link: string, userId: string) {
  const data = await User.convertandfetchvideo(link, userId);
  let data2 = data as any;
  //console.log("data2", data2.message);
  if (data2.success === true)
  {
    toast.success(data2.message);
  }
  else
  {
    toast.error(data2.message);
  }
  //toast.success(data.data.message);
  return data;
}

export async function getsongs(userId: string) {
  const data = await User.getsongs(userId);
  console.log("data songs: ", data);
  return data;
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

export function createUser(user: any){
  console.log("user", user);
  return User.create(user);
  // .then((response) => {
  //     return {
  //         response
  //     }
  // })
  // .catch((error) => {
  //      return error.response
  //     //console.log(error.response);
  // } )
  //return data;
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


export function setAccessToken(token: string){
    window.localStorage.setItem("accessToken", token)
}

export function setRefreshToken(refreshToken: string){
    window.localStorage.setItem("refreshToken", refreshToken)
}

export function getAccessToken(): null | string{
    const token = window.localStorage.getItem("accessToken")
    return token;
}

export function getRefreshToken(): null | string{
    const token = window.localStorage.getItem("refreshToken")
    return token;
}

export function removeTokens(){
    window.localStorage.removeItem("accessToken")
    window.localStorage.removeItem("refreshToken")
}