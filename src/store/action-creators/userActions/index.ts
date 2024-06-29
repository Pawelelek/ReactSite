import { UserActionTypes, UserActions } from "../../reducers/userReducer/types";
import { Dispatch } from "redux"
import { toast } from "react-toastify"
import jwtDecode from "jwt-decode"
// Import services
import { convertandfetchvideo, createUser, deletebyid, deletesong, getallusers, getsongs, login, logout, removeTokens, setAccessToken, setRefreshToken } from "../../../services/api-user-service";

export const LoginUser = (user : any) => {
    return async(dispatch: Dispatch<UserActions>) => {
         try{
            dispatch({type: UserActionTypes.START_REQUEST});
            const data = await login(user);
            const { response } = data;
            if(!response.success){
               dispatch({type: UserActionTypes.LOGIN_USER_ERROR, payload: response.message})
               toast.error(response.message)
            }
            else{
               toast.success(response.message)
               const { accessToken, refreshToken, message } = response;
               setAccessToken(accessToken);
               setRefreshToken(refreshToken);
               AuthUser(accessToken, message, dispatch);
            }
         }
         catch(e){
            dispatch({type: UserActionTypes.SERVER_ERROR, payload: "Unknown error!"})
         }
    }
}

export const ConvertAndFetchVideo = (link: string, userId: string) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const data = await convertandfetchvideo(link, userId);
      console.log("data in convert method: ",data.data.message);
      if (data != null) {
        //toast.success(data.data.message);
        dispatch({
          type: UserActionTypes.CONVERT_AND_FETCH_VIDEO_SUCCESS,
          payload: data,
        });
        //toast.success(data.data.message);
      }
    } catch (error) {
      dispatch({
        type: UserActionTypes.SERVER_ERROR,
        payload: "Помилка сервера при конвертації та отриманні відео",
      });
    }
  };
};


export const GetSongsAsync = (userId: string) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const data = await getsongs(userId);
      if (data != null) {
        dispatch({
          type: UserActionTypes.GET_SONGS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: UserActionTypes.SERVER_ERROR,
        payload: "Помилка сервера при конвертації та отриманні відео",
      });
    }
  };
};

export const DeleteSongAsync = (songId: number) => {
  return async (dispatch: Dispatch<UserActions>) => { 
    try {
      const data = await deletesong(songId);
      if (data != null) {
        dispatch({
          type: UserActionTypes.DELETE_SONGS,
          payload: songId,
        });
      }
    } catch (error) {
      dispatch({
        type: UserActionTypes.SERVER_ERROR,
        payload: "Помилка сервера при видаленні відео",
      });
    }
  };
};



export const GetAllUsers = () => {
   return async (dispatch: Dispatch<UserActions>) => {
     const data = await getallusers();
     const { response } = data;
     console.log("Response user: " + response);
     if (response.success) {
       dispatch({
         type: UserActionTypes.GET_ALL_USERS,
         payload: {allUsers: response.payload, message: response.message}
       });
     }
   };
 };

export const LogOut = (id: string) => {
   return async (dispatch: Dispatch<UserActions>) => { 
     const data = await logout(id);
     const { response } = data;
     if (response.success) {
       removeTokens();
       dispatch({
         type: UserActionTypes.LOGOUT_USER,
       });
     }
   };
 };

 export const DeleteById = (id: string) => {
  return async (dispatch: Dispatch<UserActions>) => { 
    const data = await deletebyid(id);
    console.log('Data from deletebyid:', data);
    const { response } = data;
    console.log('Response from deletebyid:', response);
    if (response.success) {
      const data = await getallusers();
      const { response } = data;
      console.log("Response user: " + response);
      if (response.success) {
        dispatch({
          type: UserActionTypes.GET_ALL_USERS,
          payload: {allUsers: response.payload, message: response.message}
        });
      }
    }
  };
};

export const Create = (user : any) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const data = await createUser(user);
      if (data != null) {
        dispatch({
          type: UserActionTypes.CREATE_USER,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: UserActionTypes.SERVER_ERROR,
        payload: error,
      });
    }
  };   
  // const data = createUser(user)
  //     if (data !== null || data !== undefined) {
  //       window.location.href = '/dashboard';
  //     } 
};

export const AuthUser = (token: string, message: string, dispatch: Dispatch<UserActions>) => {
   const decodedToken = jwtDecode(token) as any;
   dispatch({type: UserActionTypes.LOGIN_USER_SUCCESS, payload: {message, decodedToken}})
} 