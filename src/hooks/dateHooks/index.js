import constants from "helpers/constants";
const DateHooks = (time) => {
  let dateStamp = time * 1000;
  const date = new Date(dateStamp);
  const diffTime = Math.abs(new Date() - date);

  const dateDifference = {
    days: Math.floor(diffTime / constants.dateHelpers.day),
    hours: Math.floor(diffTime / constants.dateHelpers.hour),
    minutes: Math.floor(diffTime / constants.dateHelpers.minute),
  };

  if (dateDifference.days) {
    return `${dateDifference.days} days ago`;
  }
  if (dateDifference.hours) {
    return `${dateDifference.hours} hours ago`;
  }
  if (dateDifference.minutes) {
    return `${dateDifference.minutes} minutes ago`;
  }
  return "now";
};
export default DateHooks;
