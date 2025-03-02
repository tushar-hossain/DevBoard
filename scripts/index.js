// color change icon
const changingColor = document.getElementById("changing-color");
const bodyColor = document.getElementsByClassName("bg-[#f4f7ff]")[0];
changingColor.addEventListener("click", function () {
  const colorGenerate = Math.floor(Math.random() * 16767215).toString(16);
  bodyColor.classList.remove("bg-[#f4f7ff]");
  bodyColor.classList.add(`bg-[#${colorGenerate}]`);
});

// calender

const day = document.getElementById("day");
const time = document.getElementById("time");
const date = new Date();

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
day.innerText = weekday[date.getDay()] + " ,";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
time.innerText = `${
  monthNames[date.getMonth()]
} ${date.getDate()} ${date.getFullYear()}`;

// discover-btn redirect new html file
document.getElementById("discover-btn").addEventListener("click", function () {
  window.location.href = "question.html";
});

// complete-button click event
const completeButton = document.querySelectorAll(".complete-btn");

let count = 0;

for (const completed of completeButton) {
  completed.addEventListener("click", function (e) {
    count++;
    const taskAssign = Number(document.getElementById("task").innerText);
    const selectedText = Number(
      document.getElementById("selected-text").innerText
    );
    alert("Board updated Successfully");
    document.getElementById("task").innerText = taskAssign - 1;
    document.getElementById("selected-text").innerText = selectedText + 1;
    e.target.setAttribute("disabled", true);

    document.getElementById("initial-value").style.display = "none";

    // Activity Log
    const activity = document.getElementById("history");
    const card = this.closest(".card");
    const title = card.querySelector(".card-title").textContent;
    const div = document.createElement("div");
    div.innerHTML = `
    <p class="bg-[#f4f7ff] p-3 rounded-lg">
      You have Complete The Task ${title} at ${date.toLocaleTimeString()}
      </p>`;

    activity.appendChild(div);

    if (count === 6) {
      alert("congrats!!! You have completed all the current task");
    }
  });
}

// clear-history button event

document.getElementById("clear-history").addEventListener("click", function () {
  const activity = document.getElementById("history");
  activity.remove("div p");
});
