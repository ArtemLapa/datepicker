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
  font-size: 24px;
  &:first-child {
    margin-right: 8px;
    font-weight: bold;
  }
  @media(min-width: 768px) {
    font-size: 32px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.button`
  border: unset;
  background-color: #565759;
  height: 28px;
  margin-right: 2px;
  border-radius: 4px;
  color: #E6E6E6;
  cursor: pointer;
`;

const TodayButton = styled(ButtonWrapper)`
  padding-right: 16px;
  padding-left: 16px;
  font-weight: bold;
`;

const Monitor = ({
  today,
  prevHandler,
  todayHandler,
  nextHandler
}) => {
  return (
    <DivWrapper>
      <div>
        <TextWrapper>{today.format("MMMM")}</TextWrapper>
        <TextWrapper>{today.format("YYYY")}</TextWrapper>
      </div>
      <ButtonsWrapper>
        <ButtonWrapper onClick={() => prevHandler()}> &lt; </ButtonWrapper>
        <TodayButton onClick={() => todayHandler()}>Today</TodayButton>
        <ButtonWrapper onClick={() => nextHandler()}> &gt; </ButtonWrapper>
      </ButtonsWrapper>
    </DivWrapper>
  )
}

export default Monitor;