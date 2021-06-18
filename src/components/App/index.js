import React from "react";
import moment from "moment";
import styled from "styled-components";
import Header from "../Header";
import Monitor from "../Monitor";
import CalendarGrid from "../CalendarGrid";

const CalnderWrapper = styled.div`
  border-radius: 8px;
  border-top: 1px solid #737374;
  border-left: 1px solid #46464B;
  border-right: 1px solid #46464B;
  border-bottom: 2px solid #46464B;
  box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888888;
  overflow: hidden;
`;

function Index() {
  moment.updateLocale("eng", {week: {dow: 1}});
  const today = moment();
  const startDay = today.clone().startOf("month").startOf("week");
  // window.moment = moment;

  return (
    <CalnderWrapper>
      <Header />
      <Monitor today={today} />
      <CalendarGrid startDay={startDay} />
    </CalnderWrapper>
  );
}

export default Index;
