import React, {useEffect, useState} from "react";
import moment from "moment";
import styled from "styled-components";
import Header from "../Header";
import Monitor from "../Monitor";
import CalendarGrid from "../CalendarGrid";

const CalenderWrapper = styled.div`
  border-radius: 8px;
  border-top: 1px solid #737374;
  border-left: 1px solid #46464B;
  border-right: 1px solid #46464B;
  border-bottom: 2px solid #46464B;
  box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888888;
  overflow: hidden;
`;

function App() {
  moment.updateLocale("eng", {week: {dow: 1}});
  // const today = moment();
  const [today, setToday] = useState(moment())
  const startDay = today.clone().startOf("month").startOf("week");
  // window.moment = moment;

  const prevHandler = () => {
    return setToday(prev => prev.clone().subtract(1, "month"));
  }
  const todayHandler = () => {
    return setToday(moment());
  }
  const nextHandler = () => {
    return setToday(prev => prev.clone().add(1, "month"));
  }

  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then(res => res.json())
      .then(res => {
        console.log("Response", res);
        setEvents(res);
      })
  }, []);
  console.log(events)

  return (
    <CalenderWrapper>
      <Header />
      <Monitor
        today={today}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <CalendarGrid startDay={startDay} today={today} />
    </CalenderWrapper>
  );
}

export default App;
