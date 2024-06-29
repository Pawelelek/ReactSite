import { AxiosResponse } from 'axios';

interface ISong {
  id: number;
  name: string;
  songUrl: string;
}
export interface UserState{
    user: any,
    message: null | string,
    loading: boolean,
    error: null | string,
    isAuth: boolean,
    selectedUser: any,
    allUsers: ISong[],
    base64Content: string | null, 
    success: boolean
}

export enum UserActionTypes {
    START_REQUEST = "START_REQUEST",
    FINISHED_REQUEST = "FINISHED_REQUEST",
    LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
    LOGIN_USER_ERROR = "LOGIN_USER_ERROR",
    SERVER_ERROR = "SERVER_ERROR",
    LOGOUT_USER = "LOGOUT_USER",
    GET_ALL_USERS = "GET_ALL_USERS",
    CONVERT_AND_FETCH_VIDEO_SUCCESS = " CONVERT_AND_FETCH_VIDEO_SUCCESS",
    GET_SONGS = "GET_SONGS",
    DELETE_SONGS = "DELETE_SONGS",
    CREATE_USER = "CREATE_USER"
}

interface CreateUserAction {
  type: UserActionTypes.CREATE_USER,
  payload: any
} 

interface DeleteSongsAction {
    type: UserActionTypes.DELETE_SONGS,
    payload: any
  } 

interface GetSongsAction {
    type: UserActionTypes.GET_SONGS,
    payload: any
  } 

interface ConvertAndFetchVideoSuccessAction {
    type: UserActionTypes.CONVERT_AND_FETCH_VIDEO_SUCCESS,
    payload: any
  }  

interface StartRequestAction {
    type: UserActionTypes.START_REQUEST
}

interface LogoutUserAction {
    type: UserActionTypes.LOGOUT_USER
  }

  interface GetAllUsersAction {
    type: UserActionTypes.GET_ALL_USERS,
    payload: any
  }

interface FinishRequestAction {
    type: UserActionTypes.FINISHED_REQUEST
}

interface LoginUserSuccessAction{
    type: UserActionTypes.LOGIN_USER_SUCCESS,
    payload: any
}

interface LoginUserErrorAction{
    type: UserActionTypes.LOGIN_USER_ERROR,
    payload: any
}

interface ServerErrorAction{
    type: UserActionTypes.SERVER_ERROR,
    payload: any
}

export type UserActions = CreateUserAction | DeleteSongsAction | GetSongsAction | GetAllUsersAction | LogoutUserAction |  StartRequestAction | FinishRequestAction | LoginUserSuccessAction | LoginUserErrorAction | ServerErrorAction | ConvertAndFetchVideoSuccessAction

