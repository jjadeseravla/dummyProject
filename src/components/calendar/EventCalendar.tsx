import React from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  isToday,
  isSameDay,
} from 'date-fns';
import clsx from "clsx";


const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];


interface Event {
  date: Date,
  title: String;
}

interface EventCalendarProps {
  events: Event[];
}

const EventCalendar = ({ events }: EventCalendarProps ) => {
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);

  return (
    <div className="container mx-auto p-4">
      test 33333
      <div className='mb-4'>
        <h2 className="text-center">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {WEEKDAYS.map(day => {
          return (
            <div key={day} className='font-bold text-center'>{day }</div>
          )
        })}
        {Array.from({ length: startingDayIndex }).map((_, index) => {
          return (
            <div key={`empty-${index}`}
            className='border rounded-md p-2 text-center'
            />
          )
        })}
        {daysInMonth.map((day, index) => {
          return (
            <div key={index}
              className={clsx('border rounded-md p-2 text-center', {
                'bg-gray-200': isToday(day),
                'text-gray-900': isToday(day),
              })}>
              {format(day, 'd')}
              {events
                .filter((event) => isSameDay(event.date, day))
                .map((event, index) => {
                  return (
                    <div key={`${day}-${index}`} className="bg-green-500 rounded-md text-grey-900">{event.title}</div>
                  )
                })}
            </div>
          )
        })}
      </div> 
    </div>
  )
};

// styling does not work as need Tailwind

export default EventCalendar;