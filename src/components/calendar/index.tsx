import CalendarComponent from './Calendar';
import { ForwardRefExoticComponent } from 'react';
import { CalendarComponentProps } from './types/calendar.type';

interface CompoundedCalendarComponent extends ForwardRefExoticComponent<CalendarComponentProps> {
  Default: typeof CalendarComponent;
}

const Calendar = CalendarComponent as CompoundedCalendarComponent;

export default Calendar;
export { CalendarComponent };
export type { CalendarComponentProps };
