// Constants
const DAY_LENGTH = 8 * 60 * 60 * 1000;

// Elements
const clockIn = document.getElementById("clock-in");
const startMeal = document.getElementById("start-meal");
const endMeal = document.getElementById("end-meal");
const clockOut = document.getElementById("clock-out");

// Event Listeners
document.querySelector(".btn-success").addEventListener('click', calc);
document.querySelector(".btn-info").addEventListener('click', defaultTime);
// document.querySelector("form").addEventListener('change', calc);

// Functions
function calc(e) {
  const today = new Date();

  const clockInTime = new Date(`${today.toDateString()} ${clockIn.value}`);
  const startMealTime = new Date(`${today.toDateString()} ${startMeal.value}`);
  const endMealTime = new Date(`${today.toDateString()} ${endMeal.value}`);

  const mealLength = endMealTime.getTime() - startMealTime.getTime();
  const clockOutTime = new Date(clockInTime.getTime() + mealLength + DAY_LENGTH);

  clockOut.innerText = `Clock Out @ ${clockOutTime.toLocaleTimeString()}`;
}

function defaultTime(e) {
  clockIn.value = "09:00";
  startMeal.value = "13:00";
  endMeal.value = "13:30";
}