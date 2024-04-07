import React from 'react';

import { addDays, subDays } from "date-fns";
import EventCalendar from './EventCalendar';

const Calendar = () => {
  return (
    <div className="">
      test
      <EventCalendar
        events={[
          { date: subDays(new Date(), 6), title: "Post video" },
          { date: subDays(new Date(), 1), title: "Edit video" },
          { date: addDays(new Date(), 3), title: "Code" },
        ]}
      />
    </div>
  );
};

export default Calendar;