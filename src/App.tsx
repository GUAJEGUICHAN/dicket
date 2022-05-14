import React from "react";
import { Routes, Route } from "react-router-dom";

import styled from "@emotion/styled";

import { useSelector } from "react-redux";
import { InitialStateProp } from "./slice";
import Main from "./pages/Main";
import Header from "./pages/Header";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";

const Container = styled.div`
  height:100vh;
  display:flex;
  flex-direction: row;
`;
const SideBlank = styled.div`
  background-color: aqua;
  flex:1;
`
const RoutesContainer = styled.div`
  flex-basis: 1166px;
`
export default function App() {
  const { isLogedIn } = useSelector((state: InitialStateProp) => ({
    isLogedIn: state.isLogedIn
  }))

  return (
    <Container>
      <SideBlank />
      <RoutesContainer>
        <Header />
        {isLogedIn ?
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
          :
          <Routes>
            <Route path="/*" element={<Main />} />
          </Routes>
        }
        {/* <Footer /> */}
      </RoutesContainer>
      <SideBlank />
    </Container >
  );
}
