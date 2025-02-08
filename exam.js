let time = 600;
const te = document.getElementById("time");
function Start() {
  const i = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;
    te.textContent = `${min}:${sec}`; // set or get the text content within an HTML element.
    time--;
    if (time < 0) {
      clearInterval(i);
      submitExam();
    }
  }, 1000);
}

function submitExam() {
  const q1 = document.querySelector('input[name="1"]:checked');
  const q2 = document.querySelector('input[name="2"]:checked');
  const q3 = document.querySelector('input[name="3"]:checked');
  const q4 = document.querySelector('input[name="4"]:checked');

  let s = 0;
  if (q1 && q1.value === "1000") {
    s += 1;
  }
  if (q2 && q2.value === "444") {
    s += 1;
  }
  if (q3 && q3.value === "-3800") {
    s += 1;
  }
  if (q4 && q4.value === "(a^2 + 2ab + b^2)") {
    s += 1;
  }
  const result = {
    exam: "Math Exam",
    score: s,
    date: new Date().toLocaleDateString(),
  };
  localStorage.setItem("result", JSON.stringify(result));
  window.location.href = "Result.html";
}
Start();
