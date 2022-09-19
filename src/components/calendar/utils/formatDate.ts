import { getDaysLang } from '@src/components/calendar/utils/getDaysLang';

type DateType = 'prev' | 'current' | 'next';
export type FormattedDateType = {
  type: DateType;
  value: string;
  date: string;
  year: string;
  month: string;
  day: string;
  disabled?: boolean;
};

function formatDate(
  year: number,
  month: number,
  date: number,
  type: DateType,
  disabled: boolean
): FormattedDateType {
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDate = date < 10 ? `0${date}` : `${date}`;
  const day: number = new Date(year, month - 1, date).getDay();

  return {
    type: type,
    value: year + '-' + formattedMonth + '-' + formattedDate,
    year: `${year}`,
    month: formattedMonth,
    date: formattedDate,
    day: getDaysLang(day),
    disabled: disabled
  };
}

export { formatDate };
