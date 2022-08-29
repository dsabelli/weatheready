const getDayOfWeek = (day: number): string => {
  let dayOfWeek: string = "";
  switch (true) {
    case day === 0:
      dayOfWeek = "Sunday";
      break;
    case day === 1:
      dayOfWeek = "Monday";
      break;
    case day === 2:
      dayOfWeek = "Tuesday";
      break;
    case day === 3:
      dayOfWeek = "Wednesday";
      break;
    case day === 4:
      dayOfWeek = "Thursday";
      break;
    case day === 5:
      dayOfWeek = "Friday";
      break;
    case day === 6:
      dayOfWeek = "Saturday";
      break;
  }
  return dayOfWeek;
};

export { getDayOfWeek };
