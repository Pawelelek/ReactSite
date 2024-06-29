import { UserState, UserActions, UserActionTypes } from "./types";

const initialState: UserState = {
  user: {},
  message: null,
  loading: false,
  error: null,
  isAuth: false,
  selectedUser: null,
  allUsers: [],
  base64Content: null,
  success: false
};

const UserReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.START_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload.decodedToken,
        message: action.payload.message,
      };
    case UserActionTypes.FINISHED_REQUEST:
      return { ...state, loading: false };
    case UserActionTypes.LOGIN_USER_ERROR:
      return { ...state, loading: false, message: action.payload.message };
    case UserActionTypes.SERVER_ERROR:
      return { ...state, loading: false };
    case UserActionTypes.LOGOUT_USER:
      return {
        user: {},
        message: null,
        loading: false,
        error: null,
        isAuth: false,
        selectedUser: null,
        allUsers: [],
        base64Content: null,
        success: true
      };
      case UserActionTypes.GET_ALL_USERS:
        return { ...state, loading: false, allUsers: action.payload.allUsers , message: action.payload.message};
      case UserActionTypes.CONVERT_AND_FETCH_VIDEO_SUCCESS:
        console.log("action payload:                           ", action.payload);
        console.log("action payload.payload dawdawdwadwdawwa dawdawdwadwa :                           ", action.payload.payload);
        console.log("data message:", action.payload.message);

        return {
          ...state,
          loading: false,
          message: action.payload.message,
          base64Content: action.payload.payload,
          success: action.payload.success
          
          };  
          case UserActionTypes.GET_SONGS:
            //console.log("action payload:                           ", action.payload);
            console.log("action payload.payload dawdawdwadwdawwa dawdawdwadwa :                           ", action.payload.payload);
            return {
              ...state,
              loading: false,
              message: action.payload.message,
              allUsers: action.payload.payload,
              
              };      
              case UserActionTypes.DELETE_SONGS:
                console.log("action!: ",action);
                //console.log("action payload:                           ", action.payload);
                //console.log("action payload.payload dawdawdwadwdawwa dawdawdwadwa :                           ", action.payload.payload);
                return {
                  ...state,
                  loading: false,
                  message: "Пісня видалена",
                  allUsers: state.allUsers.filter(x => x.id !== action.payload)
                  //allUsers: action.payload.payload,
                  
                  };    

                  case UserActionTypes.CREATE_USER:
                    //console.log("action payload:                           ", action.payload);
                    //console.log("action payload.payload dawdawdwadwdawwa dawdawdwadwa :                           ", action.payload.payload);
                    return {
                      ...state,
                      loading: false,
                      message: "Користувач доданий",
                      //allUsers: action.payload.payload,
                      
                      };                  
    default:
      return state;
  }
};

export default UserReducer;
