import { format } from 'date-fns';

// dateString: 2020-12-13T19:15:00Z
export const formatShortDatetime = (dateString: string): string => {
  return format(new Date(dateString), 'dd/MM HH:mm');
};
