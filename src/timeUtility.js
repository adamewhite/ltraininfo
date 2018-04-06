function determineMonths(seconds, startMonth) {
  const monthLengthsInDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayInSeconds = 86400;
  let returnObj = {};
  let numberOfMonths = 0;
  let remainingSeconds = seconds;
  let currentMonth = startMonth - 1;
  while (remainingSeconds > monthLengthsInDays[currentMonth] * dayInSeconds) {
    remainingSeconds -= monthLengthsInDays[currentMonth] * dayInSeconds;
    numberOfMonths += 1;
    currentMonth = (currentMonth !== 0) ? currentMonth -= 1 : 11;
  }
  returnObj = { numberOfMonths, remainingSeconds };
  return returnObj;
}

function formatTime(ms) {
  let remainingTime = ms / 1000;
  let resultTime = {};
  let years, months, weeks, hours, days, minutes, seconds;
  // years

  // if (remainingTime > 31104000) {
  //   years = Math.floor(remainingTime / 31104000);
  //   remainingTime -= years * 31104000;
  //   resultTime.years = years;
  // }

  // months

  if (remainingTime > 2592000) {
    let monthObj = {};
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    monthObj = determineMonths(remainingTime, currentMonth);
    remainingTime = monthObj.remainingSeconds;
    months = monthObj.numberOfMonths;
    resultTime.months = months;
  }

  // weeks

  if (remainingTime > 604800) {
    weeks = Math.floor(remainingTime / 604800);
    remainingTime -= weeks * 604800;
    resultTime.weeks = weeks;
  }

  // days

  if (remainingTime > 86400) {
    days = Math.floor(remainingTime / 86400);
    remainingTime -= days * 86400;
    resultTime.days = days;
  }

  // hours

  if (remainingTime > 3600) {
    hours = Math.floor(remainingTime / 3600);
    remainingTime -= hours * 3600;
    resultTime.hours = hours;
  }

  // minutes

  if (remainingTime > 60) {
    minutes = Math.floor(remainingTime / 60);
    remainingTime -= minutes * 60;
    resultTime.minutes = minutes;
  }

  // seconds

  if (remainingTime > 0) {
    seconds = Math.floor(remainingTime);
    resultTime.seconds = seconds;
  }

  return resultTime;
}

export default formatTime;
