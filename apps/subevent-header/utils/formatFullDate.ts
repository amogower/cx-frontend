import { format } from 'date-fns';

// dayString: 2020-12-13T19:15:00Z
export const formatFullDate = (dateString: string): string => {
  return format(new Date(dateString), 'EEEE dd MMM, yyyy');
};
