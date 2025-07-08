const getDayOfYearFromDate = (date: string | Date) => {
  const now: Date = new Date(date);
  const start: Date = new Date(now.getFullYear(), 0, 0);
  const diff =
    now.getTime() -
    start.getTime() +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);

  return day;
};

export default getDayOfYearFromDate;
