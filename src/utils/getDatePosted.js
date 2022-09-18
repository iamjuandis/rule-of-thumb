const getDatePosted = (date) => {
  const difference = compareDates(date);

  switch (true) {
    case difference < 30:
      return `${difference} days ago`;
    case difference > 30 && difference < 365:
      return `${Math.floor(difference / 30)} ${
        Math.floor(difference / 30) === 1 ? "month" : "months"
      } ago`;
    case difference > 365:
      return `${Math.floor(difference / 356)} ${
        Math.floor(difference / 356) === 1 ? "year" : "years"
      } ago`;
    default:
      return "0 days";
  }
};

const compareDates = (date) => {
  const today = new Date();
  const lastUpdatedDate = new Date(date);
  const difference =
    (today.getTime() - lastUpdatedDate.getTime()) / (1000 * 60 * 60 * 24); // Milliseconds - seconds - minutes - hours

  return difference;
};

export default getDatePosted;
