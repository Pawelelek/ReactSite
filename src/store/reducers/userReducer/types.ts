export interface User {
    id: string;
    name: string;
    email: string;
    firstname?: string;
    lastname?: string;
    password?: string;
    confirmpassword?: string;
    phonenumber?: string;
    role?: string;
  }

export interface UserState{
    user: any,
    message: null | string,
    loading: boolean,
    error: null | string,
    isAuth: boolean,
    selectedUser: any,
    allUsers: User[],
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
    CREATE_USER = "CREATE_USER",
}

interface CreateUserAction {
  type: UserActionTypes.CREATE_USER,
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

export type UserActions = CreateUserAction | GetAllUsersAction | LogoutUserAction |  StartRequestAction | FinishRequestAction | LoginUserSuccessAction | LoginUserErrorAction | ServerErrorAction 

