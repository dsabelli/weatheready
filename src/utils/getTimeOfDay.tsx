const getTimeOfDay = (dt: number): string => {
  let timeOfDay: string = "";
  switch (true) {
    case dt === 8:
      timeOfDay = "Morning";
      break;
    case dt === 14:
      timeOfDay = "Afternoon";
      break;
    case dt === 20:
      timeOfDay = "Evening";
      break;
    case dt === 2:
      timeOfDay = "Night";
      break;
  }
  return timeOfDay;
};

export { getTimeOfDay };
