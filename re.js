function submitForm() {
  const n = document.getElementById("name").value;
  const e = document.getElementById("email").value;
  const s = document.getElementById("exam").value;

  const data = {
    name: n,
    email: e,
    subject: s,
  };

  fetch("http://localhost:5000/exams", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
        alert("Exam registered successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
