import { format, parseISO } from 'date-fns';

export * from 'date-fns';

export const TodayDateFormat = (date: string) => {
  const dateObj = parseISO(date);
  const formattedDate = format(dateObj, "'Today,' h:mm a");
  return formattedDate;
};
