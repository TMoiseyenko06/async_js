const input = document.getElementById("amount");
const start = document.getElementById("start");
const timer = document.getElementById("timer");
const delay = document.getElementById("delay");
const startNotif = document.getElementById("startNotif");
const startnot = document.getElementById("startnot");
const endnot = document.getElementById("endnot");
const notif = document.getElementById("notification");

start.addEventListener("click", (event) => {
  event.preventDefault();
  count = input.value;
  clearInterval();
  counting = setInterval(() => {
    if (count <= 0) {
      clearInterval();
      timer.textContent = "0";
    } else {
      timer.textContent = count;
      count--;
    }
  }, 1000);
});

startNotif.addEventListener("click", (event) => {
  event.preventDefault();
  setTimeout(() => alert("Notification!"), delay.value);
});

startnot.addEventListener("click", (event) => {
  event.preventDefault();
  let count = 1;
  let stop = false;
  endnot.addEventListener("click", () => (stop = true));
  setInterval(() => {
    if (stop){
        clearInterval();
    }else{
        notif.textContent = `Notification ${count}`;
        count++;
    }
  }, 1000);
});
