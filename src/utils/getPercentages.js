const getPercentages = (up, down) => {
  const total = up + down;
  const percentageUp = (up / total) * 100;
  const percentageDown = (down / total) * 100;

  return {
    percentageUp: `${Math.round(percentageUp * 10) / 10}%`,
    percentageDown: `${Math.round(percentageDown * 10) / 10}%`,
  };
};

export default getPercentages;
