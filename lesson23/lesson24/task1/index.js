const getDiffs = (startDate, endDate) => {
  const oneDay = 1000 * 60 * 60 * 24;

  const difference = Math.abs(startDate - endDate);

  const diffDay = Math.floor(difference / oneDay);

  const diffHour = Math.abs(
    new Date(startDate).getHours() - new Date(endDate).getHours()
  );
  const diffMinutes = Math.abs(
    new Date(startDate).getMinutes() - new Date(endDate).getMinutes()
  );
  const diffSeconds = Math.abs(
    new Date(startDate).getSeconds() - new Date(endDate).getSeconds()
  );

  return `${diffDay}d ${diffHour}h ${diffMinutes}m ${diffSeconds}s`;
};

console.log(
  getDiffs(new Date(2022, 6, 19, 12, 38, 11), new Date(2000, 0, 11, 11, 11, 11))
);

/////////////////////////////

const getDiff = (startDate, endDate) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHours = 1000 * 60 * 60;
  const oneMinut = 1000 * 60;

  const difference = Math.abs(startDate - endDate);

  const diffDays = Math.floor(difference / oneDay);

  const diffHours = Math.floor((difference - diffDays * oneDay) / oneHours);

  // console.log(difference, diffHours);
  // console.log(diffDays * oneDay);
  // console.log(Math.floor((difference - diffDays * oneDay) / oneHours));

  const diffMinuts = Math.floor(
    (difference - diffDays * oneDay - diffHours * oneHours) / oneMinut
  );

  const diffSeconds = Math.floor(
    (difference -
      diffDays * oneDay -
      diffHours * oneHours -
      diffMinuts * oneMinut) /
      1000
  );

  return `${diffDays}d ${diffHours}h ${diffMinuts}m ${diffSeconds}s`;
};

console.log(
  getDiff(new Date(2022, 6, 19, 12, 38, 11), new Date(2000, 0, 11, 11, 11, 11))
);
/////////////////////////////////////////

const date = (startDate, endDate) => {
  let difference = Math.abs(startDate - endDate) / 1000;

  let days = Math.floor(difference / 86400);
  difference -= days * 86400;

  let hours = Math.floor(difference / 3600) % 24;
  difference -= hours * 3600;

  let minutes = Math.floor(difference / 60) % 60;
  difference -= minutes * 60;

  let seconds = difference % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(
  date(new Date(2022, 6, 19, 12, 38, 11), new Date(2000, 0, 11, 11, 11, 11))
);
