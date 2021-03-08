import React from "react";
import styled from 'styled-components';
import MainList from "./MainList";

const Wrapper = styled.div`
  background: rgb(130,255,146);
  background: linear-gradient(180deg, rgba(130,255,146,1) 0%, rgba(184,252,70,1) 100%);
  height: 100vh;
`;

const Heading = styled.h1``;

export default App = () => {
  return (
    <Wrapper className="py-5">
      <Heading className="text-center">Growcify Assignment</Heading>
      <MainList />
    </Wrapper>
  )
};
