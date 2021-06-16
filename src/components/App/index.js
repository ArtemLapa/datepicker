import React from "react";
import moment from "moment";
import Header from "../Header";
import Monitor from "../Monitor";
import CalendarGrid from "../CalendarGrid";

function Index() {
  window.moment = moment;

  moment.updateLocale("eng", {week: {dow: 1}});
  const startDay = moment().startOf("month").startOf("week");
  // const endDay = moment().endOf("month").endOf("week");

  // const calendar = [];
  // let day = startDay.clone();
  //
  // while (!day.isAfter(endDay)) {
  //   calendar.push(day.clone());
  //   day.add(1, "day");
  // }
  //
  // console.log(calendar);
  // window.moment = moment;
  // window.startDay = startDay;
  // window.endDay = endDay;
  // window.day = day;

  return (
    <div>
      <Header />
      <Monitor />
      <CalendarGrid startDay={startDay} />
    </div>
  );
}

export default Index;
