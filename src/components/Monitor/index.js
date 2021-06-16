import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1E1F21;
  color: #DCDDDD;
  padding: 16px;
`;

const TextWrapper = styled.span`
  font-size: 32px;
  &:first-child {
    margin-right: 8px;
    font-weight: bold;
  }
`;

const ButtonWrapper = styled.button`
  border: unset;
  background-color: #565759;
  height: 28px;
  margin-right: 2px;
  border-radius: 4px;
  color: #E6E6E6;
`;

/*const TodayBotton = styled(ButtonWrapper)`

`;*/

const Monitor = () => {
  return (
    <DivWrapper>
      <div>
        <TextWrapper>June</TextWrapper>
        <TextWrapper>2021</TextWrapper>
      </div>
      <div>
        <ButtonWrapper> &lt; </ButtonWrapper>
        <ButtonWrapper>Today</ButtonWrapper>
        <ButtonWrapper> &gt; </ButtonWrapper>
      </div>
    </DivWrapper>
  )
}

export default Monitor;