import React from "react";
import moment from "moment";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  //grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  background-color: ${props => props.isHeader ? "#1E1F21" : "#4D4C4D"};
  ${props => props.isHeader && "border-bottom: 1px solid #4D4C4D"}
`;

const CellWrapper = styled.div`
  min-width: 50px;
  min-height: ${props => props.isHeader ? 24 : 15}px;
  background-color: ${props => props.isWeekend ? "#272829" : "#1E1F21"};
  color: #DDDDCD;
  @media(min-width: 576px) {
    min-width: 75px;
    min-height: ${props => props.isHeader ? 24 : 50}px;
  }
  @media(min-width: 768px) {
    min-width: 100px;
    min-height: ${props => props.isHeader ? 24 : 60}px;
  }
  @media(min-width: 1024px) {
    min-width: 140px;
    min-height: ${props => props.isHeader ? 24 : 80}px;
  }
`;

const RowInCell = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
`;

const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  font-size: 14px;
  @media(min-width: 768px) {
    font-size: 16px;
  }
`;

const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
  background: #F00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarGrid = ({startDay}) => {
  // const totalDays = 42;
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  const isCurrentDay = (day) => {
    return  moment().isSame(day, "day");
  }
  return (
    <>
      <GridWrapper isHeader>
        {[...Array(7)].map((_, i) => (
          <CellWrapper key={i} isHeader>
            {i}
          </CellWrapper>
        ))}
      </GridWrapper>
      <GridWrapper>
        {
          daysArray.map((dayItem) => (
            <CellWrapper
              key={dayItem.unix()}
              isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
            >
              <RowInCell
                justifyContent={"flex-end"}
              >
                <DayWrapper>
                  {!isCurrentDay(dayItem) && dayItem.format("D")}
                  {isCurrentDay(dayItem) && <CurrentDay>{dayItem.format("D")}</CurrentDay>}
                </DayWrapper>
              </RowInCell>
            </CellWrapper>
          ))
        }
      </GridWrapper>
    </>
  )
}

export default CalendarGrid;