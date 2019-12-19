import * as ACTION from '../constants/auth';
import Swal from 'sweetalert2';

import Auth from '../Auth';

const initialState = {
    fetching: false,
    user: {},
    avatar: {},
    auth_data: {},
    count: {},
    userrole: {},
    userroledata: {},
    userrightdata: {},
    userroletoright: {},
    error: null,
    userright: {},
    searchdata: {},
    appCount: {},
    appData: {}
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.REGISTER_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.REGISTER_SUCCESS:
            Auth.setAuth(action.response.data);
            return {
                ...state,
                fetching: false,
                auth_data: action.response.data,
            };
        case ACTION.REGISTER_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.error
            };
        case ACTION.LOGIN_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.LOGIN_SUCCESS:
            Auth.setAuth(action.response.data);
            return {
                ...state,
                fetching: false,
                auth_data: action.response.data,
                user: {},
            };
        case ACTION.LOGIN_FAILURE:
            Auth.removeAuth();
            Auth.removeAuthenticateUser();

            return {
                ...state,
                fetching: false,
                user: {},
                auth_data: {},
                error: action.error
            };



        //profile
        case ACTION.PROFILE_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.PROFILE_SUCCESS:
            console.log("case ACTION.PROFILE_SUCCESS: called", action)
            Auth.authenticateUser(action.response.data);
            return {
                ...state,
                fetching: false,
                user: action.response.data
            };
        case ACTION.PROFILE_FAILURE:
            Auth.removeAuthenticateUser();
            return {
                ...state,
                fetching: false,
                user: {},
                error: action.error
            };

        //Upload Image
        case ACTION.AVATAR_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.AVATAR_SUCCESS:
            return {
                ...state,
                fetching: false,
                avatar: action.response.data
            };
        case ACTION.AVATAR_FAILURE:
            return {
                ...state,
                fetching: false,
                avatar: {},
                error: action.error
            };


        //Update Profile
        case ACTION.UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                fetching: false,
                user: action.response.data
            };
        case ACTION.UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                fetching: false,
                user: {},
                error: action.error
            };


        //FORGOT PASSWORD
        case ACTION.FORGOTPASSWORD_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.FORGOTPASSWORD_SUCCESS:
            return {
                ...state,
                fetching: false,
                user: action.response.data
            };
        case ACTION.FORGOTPASSWORD_FAILURE:
            return {
                ...state,
                fetching: false,
                user: {},
                error: action.error
            };


        //CHANGE PASSWORD
        case ACTION.CHANGEPASSWORD_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.CHANGEPASSWORD_SUCCESS:
            return {
                ...state,
                fetching: false,
                user: action.response.data
            };
        case ACTION.CHANGEPASSWORD_FAILURE:
            return {
                ...state,
                fetching: false,
                user: {},
                error: action.error
            };


        //REGISTER USERROLE
        case ACTION.REGISTER_USERROLE_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.REGISTER_USERROLE_SUCCESS:
            Swal.fire("UserRole Added Successfully!", "", "success");
            return {
                ...state,
                fetching: false,
                user: action.response.data
            };
        case ACTION.REGISTER_USERROLE_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                user: {},
                error: action.error
            };

        //COUNT USERROLE
        case ACTION.COUNT_USERROLE_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.COUNT_USERROLE_SUCCESS:
            return {
                ...state,
                fetching: false,
                count: action.response.data
            };
        case ACTION.COUNT_USERROLE_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                count: {},
                error: action.error
            };


        //GETUSERROLE
        case ACTION.GETUSERROLE_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.GETUSERROLE_SUCCESS:
            return {
                ...state,
                fetching: false,
                userrole: action.response.data
            };
        case ACTION.GETUSERROLE_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                userrole: {},
                error: action.error
            };


        //DELETE USERROLE
        case ACTION.DELETEUSERROLE_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.DELETEUSERROLE_SUCCESS:
            Swal.fire("UserRole Deleted Successfully!", "", "success");
            return {
                ...state,
                fetching: false,
                userrole: action.response.data
            };
        case ACTION.DELETEUSERROLE_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                userrole: {},
                error: action.error
            };


        //UPDATE USERROLE
        case ACTION.UPDATEUSERROLE_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.UPDATEUSERROLE_SUCCESS:
            Swal.fire("UserRole Updated Successfully!", "", "success");
            return {
                ...state,
                fetching: false,
                userrole: action.response.data
            };
        case ACTION.UPDATEUSERROLE_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                userrole: {},
                error: action.error
            };

        //SEARCH USERROLE
        case ACTION.SEARCHUSERROLE_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.SEARCHUSERROLE_SUCCESS:
            return {
                ...state,
                fetching: false,
                searchdata: action.response.data
            };
        case ACTION.SEARCHUSERROLE_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                searchdata: {},
                error: action.error
            };



        //REGISTER USERRIGHT
        case ACTION.REGISTER_USERRIGHT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.REGISTER_USERRIGHT_SUCCESS:
            Swal.fire("UserRight Added Successfully!", "", "success");
            return {
                ...state,
                fetching: false,
                user: action.response.data
            };
        case ACTION.REGISTER_USERRIGHT_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                user: {},
                error: action.error
            };

        //COUNT USERRIGHT
        case ACTION.COUNT_USERRIGHT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.COUNT_USERRIGHT_SUCCESS:
            return {
                ...state,
                fetching: false,
                count: action.response.data
            };
        case ACTION.COUNT_USERRIGHT_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                count: {},
                error: action.error
            };


        //GETUSERRIGHT
        case ACTION.GETUSERRIGHT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.GETUSERRIGHT_SUCCESS:
            return {
                ...state,
                fetching: false,
                userright: action.response.data
            };
        case ACTION.GETUSERRIGHT_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                userright: {},
                error: action.error
            };


        //DELETE USERRIGHT
        case ACTION.DELETEUSERRIGHT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.DELETEUSERRIGHT_SUCCESS:
            Swal.fire("UserRight Deleted Successfully!", "", "success");
            return {
                ...state,
                fetching: false,
                userright: action.response.data
            };
        case ACTION.DELETEUSERRIGHT_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                userright: {},
                error: action.error
            }

        //UPDATE USERRIGHT
        case ACTION.UPDATEUSERRIGHT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.UPDATEUSERRIGHT_SUCCESS:
            Swal.fire("UserRole Updated Successfully!", "", "success");
            return {
                ...state,
                fetching: false,
                userright: action.response.data
            };
        case ACTION.UPDATEUSERRIGHT_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                userright: {},
                error: action.error
            };

        //SEARCH USERRIGHT
        case ACTION.SEARCHUSERRIGHT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.SEARCHUSERRIGHT_SUCCESS:
            return {
                ...state,
                fetching: false,
                searchdata: action.response.data
            };
        case ACTION.SEARCHUSERRIGHT_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                searchdata: {},
                error: action.error
            };

        //GETUSERS USERRIGHT
        case ACTION.GETUSERSROLE_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.GETUSERSROLE_SUCCESS:
            return {
                ...state,
                fetching: false,
                userroledata: action.response.data
            };
        case ACTION.GETUSERSROLE_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                userroledata: {},
                error: action.error
            };


        //GETUSERS USERRIGHT
        case ACTION.GETUSERSRIGHT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.GETUSERSRIGHT_SUCCESS:
            return {
                ...state,
                fetching: false,
                userrightdata: action.response.data
            };
        case ACTION.GETUSERSRIGHT_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                userrightdata: {},
                error: action.error
            };


        //GETUSERROLETORIGHT
        case ACTION.GETUSERROLETORIGHT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.GETUSERROLETORIGHT_SUCCESS:
            return {
                ...state,
                fetching: false,
                userroletoright: action.response.data
            };
        case ACTION.GETUSERROLETORIGHT_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                userroletoright: {},
                error: action.error
            };


        //UPDATEUSERROLETORIGHT
        case ACTION.UPDATEUSERROLETORIGHT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.UPDATEUSERROLETORIGHT_SUCCESS:
            Swal.fire("Rights Allocated Successfully!", "", "success");
            return {
                ...state,
                fetching: false,
                userroletoright: action.response.data
            };
        case ACTION.UPDATEUSERROLETORIGHT_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                userroletoright: {},
                error: action.error
            };

        //CREATEAPP
        case ACTION.CREATEAPP_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.CREATEAPP_SUCCESS:
            Swal.fire("App Created Successfully!", "", "success");
            window.location.href = "/#/ListApp"
            return {
                ...state,
                fetching: false
            };
        case ACTION.CREATEAPP_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                error: action.error
            };


        //APPCOUNT
        case ACTION.APPCOUNT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.APPCOUNT_SUCCESS:
            return {
                ...state,
                fetching: false,
                appCount: action.response.data
            };
        case ACTION.APPCOUNT_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                appCount: {},
                error: action.error
            };



        //APPPGDATA
        case ACTION.APPPGDATA_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.APPPGDATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                appData: action.response.data

            };
        case ACTION.APPPGDATA_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                appData: {},
                error: action.error
            };



        //APPDATABYID
        case ACTION.APPDATABYID_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.APPDATABYID_SUCCESS:
            return {
                ...state,
                fetching: false,
                appData: action.response.data

            };
        case ACTION.APPDATABYID_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                appData: {},
                error: action.error
            };

        //UPDATEAPP
        case ACTION.UPDATEAPP_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.UPDATEAPP_SUCCESS:
            Swal.fire("App Updated Successfully!", "", "success");
            window.location.href = "/#/ListApp"
            return {
                ...state,
                fetching: false,
                appData: action.response.data

            };
        case ACTION.UPDATEAPP_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                appData: {},
                error: action.error
            };

        //DELETEAPP
        case ACTION.DELETEAPP_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.DELETEAPP_SUCCESS:
            Swal.fire("App InActiveted Successfully!", "", "success");
            return {
                ...state,
                fetching: false,
                appData: action.response.data
            };
        case ACTION.DELETEAPP_FAILURE:
            Swal.fire("Something went wrong!", "", "warning");
            return {
                ...state,
                fetching: false,
                appData: {},
                error: action.error
            };


              //SEARCHAPP
        case ACTION.SEARCHAPP_REQUEST:
                return {
                    ...state,
                    fetching: true,
                };
            case ACTION.SEARCHAPP_SUCCESS:
                return {
                    ...state,
                    fetching: false,
                    appData: action.response.data
                };
            case ACTION.SEARCHAPP_FAILURE:
                Swal.fire("Something went wrong!", "", "warning");
                return {
                    ...state,
                    fetching: false,
                    appData: {},
                    error: action.error
                };

















        case ACTION.LOGOUT_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case ACTION.LOGOUT_SUCCESS:
            Auth.removeAuth();
            Auth.removeAuthenticateUser();
            return {
                ...state,
                fetching: false,
                user: {},
                auth_data: {}
            };

        case ACTION.LOGOUT_FAILURE:
            Auth.removeAuth();
            Auth.removeAuthenticateUser();

            return {
                ...state,
                fetching: false,
                user: {},
                auth_data: {},
                error: action.error
            };
        default:
            return state;
    }
};
export default auth;
