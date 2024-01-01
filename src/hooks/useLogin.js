import Axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {createSession} from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

function useLogin() {
    const [hasError, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const doLogin = (email,password) => {
        const apiKey = "AIzaSyB3Te6ggXcHCmhZ9wblKjPiFuLmYIrE70Y";
        const url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
        Axios.post(url,{email,password, returnSecureToken:true})
            .then((res) => {
                console.log("success", res.data);
                //create user session
                dispatch(createSession(res.data));
                navigate("/");
            })
            .catch((e) => setError(true));
    };
    return {doLogin, hasError};
}

export default useLogin;