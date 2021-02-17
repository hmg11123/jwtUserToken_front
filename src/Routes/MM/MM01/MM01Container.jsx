import React, { useState } from "react";
import MM01Presenter from "./MM01Presenter";
import { GET_USER, GET_COOKIE } from "./MM01Queries";
import { useMutation, useQuery } from "react-apollo-hooks";
import useInput from "../../../Hooks/useInput";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

const MM01Container = () => {
 const inputName = useInput("");
 const inputPassword = useInput("");
 const [changeScreen, setChangeScreen] = useState(false);
 const [cookies, setCookie, removeCookie] = useCookies(["login"]);
 const [getUserMutation] = useMutation(GET_USER);
 const {
  data: getCookieData,
  loading: getCookieloading,
  refetch: getCookieRefetch,
 } = useQuery(GET_COOKIE, {
  variables: {
   cookieToken: cookies.login,
  },
 });

 const loginHandler = async () => {
  const { data } = await getUserMutation({
   variables: {
    name: inputName.value,
    password: inputPassword.value,
   },
  });
  if (data.getUser.isLogin) {
   //    setCookie("login", data.getUser.login_user, {
   //     httpOnly: true,
   //    });
   toast.info("성공");
   console.log(cookies);
   setChangeScreen(true);
  } else {
   toast.error("실패");
  }
 };

 const logoutHandler = async () => {
  removeCookie("login");
  setChangeScreen(false);
 };

 return (
  <MM01Presenter
   getCookieData={getCookieData && getCookieData.getCookie}
   inputName={inputName}
   inputPassword={inputPassword}
   changeScreen={changeScreen}
   loginHandler={loginHandler}
   logoutHandler={logoutHandler}
  ></MM01Presenter>
 );
};

export default MM01Container;
