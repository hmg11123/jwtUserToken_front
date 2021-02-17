import React from "react";
import {
 Wrapper,
 TextInput,
 CheckBtn,
 TitleBox,
} from "../../../Components/commonComponents";

const MM01Presenter = ({
 inputName,
 inputPassword,
 loginHandler,
 logoutHandler,
 changeScreen,
 getCookieData,
 cookies,
}) => {
 return (
  <Wrapper height={"100vh"}>
   {changeScreen ? (
    <Wrapper>
     <Wrapper height={"30%"}>
      <TitleBox>회원가입 되었습니다!!!!!!</TitleBox>
     </Wrapper>
     <Wrapper height={"20%"}>
      {getCookieData ? (
       <Wrapper>
        <Wrapper>아이디 : {getCookieData._id}</Wrapper>
        <Wrapper>이름 : {getCookieData.name}</Wrapper>
        <Wrapper>비밀번호 : {getCookieData.password}</Wrapper>
       </Wrapper>
      ) : (
       ""
      )}
     </Wrapper>
     <Wrapper height={"30%"}>
      <CheckBtn width={`150px`} height={"40px"} onClick={logoutHandler}>
       로그아웃
      </CheckBtn>
     </Wrapper>
     <Wrapper height={"20%"}></Wrapper>
    </Wrapper>
   ) : (
    <Wrapper>
     <Wrapper height={"30%"}>
      <TitleBox>로그인</TitleBox>
     </Wrapper>
     <Wrapper height={"30%"}>
      <TextInput
       width={"350px"}
       height={"30px"}
       placeholder={"name"}
       {...inputName}
      ></TextInput>
      <TextInput
       width={"350px"}
       height={"30px"}
       placeholder={"password"}
       {...inputPassword}
      ></TextInput>
      <CheckBtn width={`150px`} height={"40px"} onClick={loginHandler}>
       보내기
      </CheckBtn>
     </Wrapper>
     <Wrapper height={"40%"}></Wrapper>
    </Wrapper>
   )}
  </Wrapper>
 );
};

export default MM01Presenter;
