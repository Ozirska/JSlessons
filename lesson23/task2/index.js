const generateNumbersRange = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
};

const getLineSeats = () =>
  generateNumbersRange(1, 10)
    .map(
      (seatNumber) =>
        `<div class="sector__seat" data-seat-number="${seatNumber}"></div>`
    )
    .join("");

const getSectorLines = () => {
  const seatsString = getLineSeats();

  return generateNumbersRange(1, 10)
    .map(
      (lineNumber) =>
        `<div class="sector__line" data-line-number="${lineNumber}">${  }</div>`
    )
    .join("");
};
const arenaElem = document.querySelector(".arena");

const renderArena = () => {
  const linesString = getSectorLines();

  const sectorsString = generateNumbersRange(1, 3)
    .map(
      (sectorNumber) =>
        `<div class="sector" data-sector-number="${sectorNumber}">${linesString}</div>`
    )
    .join("");
  arenaElem.innerHTML = sectorsString;
};

renderArena();

const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains("sector__seat");
  if (!isSeat) {
    return;
  }

  const seatsNumber = event.target.dataset.seatNumber;
  const linesNumber = event.target.closest(".sector__line").dataset.lineNumber;
  const sectorsNumber = event.target.closest(".sector").dataset.sectorNumber;

  const selectedSeatElem = document.querySelector(".board__selected-seat");
  selectedSeatElem.textContent = `S ${sectorsNumber} - L ${linesNumber} - S ${seatsNumber}`;
  console.log(seatsNumber);
  console.log(linesNumber);
  console.log(sectorsNumber);
};

arenaElem.addEventListener("click", onSeatSelect);
