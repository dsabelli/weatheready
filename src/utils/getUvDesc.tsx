const getUvDesc = (uv: number): JSX.Element => {
  let uvDesc: string = "";

  switch (true) {
    case uv < 3:
      uvDesc = "Low";
      break;
    case uv >= 3 && uv <= 5:
      uvDesc = "Moderate";
      break;
    case uv >= 6 && uv <= 7:
      uvDesc = "High";
      break;
    case uv >= 8 && uv <= 10:
      uvDesc = "Very High";
      break;
    case uv > 10:
      uvDesc = "Extreme";
      break;
  }

  return <>{uvDesc}</>;
};

export { getUvDesc };
