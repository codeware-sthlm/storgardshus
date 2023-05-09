/** Get a formatted date string from a Date object */
export const getFormattedDate = (date: Date) =>
  date ? new Date(date).toLocaleDateString('sv-se') : '';
