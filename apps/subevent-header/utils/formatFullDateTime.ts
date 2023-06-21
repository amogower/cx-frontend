import { format } from 'date-fns';

export const formatFullDatetime = (dateString: string): string => {
  return format(new Date(dateString), 'MMM dd, yyyy HH:mm');
};
