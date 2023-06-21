export const getUserTimeZone = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export const formatTwoDigit = (datePart: string | number): string => {
  return `0${datePart}`.slice(-2);
};
