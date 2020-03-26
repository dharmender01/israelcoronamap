
const isOnEmbed = window.location.pathname.includes('embed');

const initUpdatedTime = () => {
  const updatedTime = "24.3.2020, 18:30";
  if (isOnEmbed) {
    document.getElementById("last-updated-time-embed").textContent = updatedTime;
  } else {
    document.getElementById("last-updated-time").textContent = updatedTime;
  }
};

const sickDataUpdate = () => {
  const updatedTime = "26.3.2020, 01:10";
  const numberOfSickPeople = 2369;
  const numberOfSickPeopleYesterday = 2030;
  const numberOfRecovered = 64;
  const numberOfRecoveredYesterday = 58;
  const numberOfDeaths = 5;
  const numberOfDeathsToday = 0;

  document.getElementById("number-of-sick-people-text").textContent = numberOfSickPeople;
  document.getElementById("number-of-sick-people-today").textContent = `${numberOfSickPeople - numberOfSickPeopleYesterday} ${i18n('today')}`;

  document.getElementById("number-of-recovered-people-text").textContent = numberOfRecovered;
  document.getElementById("number-of-recovered-people-today").textContent = `${numberOfRecovered - numberOfRecoveredYesterday} ${i18n('today')}`;

  document.getElementById("number-of-deaths-text").textContent = numberOfDeaths;
  document.getElementById("number-of-deaths-today").textContent = `${numberOfDeathsToday} ${i18n('today')}`;

  document.getElementById("last-updated-time-sick").textContent = updatedTime;
};

initUpdatedTime();
sickDataUpdate();
