const r = document.getElementById("rf");
if (r) {
  r.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const exam = document.getElementById("exam").value;
    const nr = { name, email, exam }; // nr is object created to hold form data
    let rs = JSON.parse(localStorage.getItem("rs")) || [];
    rs.push(nr);
    localStorage.setItem("rs", JSON.stringify(rs));

    display();
  });
}

function display() {
  const elist = document.getElementById("el");
  if (elist) {
    const rs = JSON.parse(localStorage.getItem("rs")) || [];
    elist.innerHTML = "";
    rs.forEach((rr) => {
      // each item in loop is reffered as rr
      elist.innerHTML += `<p><strong>Name:</strong> ${rr.name} <strong>Email:</strong> ${rr.email} <strong>Exam:</strong> ${rr.exam}</p>`;
    });
  }
}

const uform = document.getElementById("uf");
if (uform) {
  uform.addEventListener("submit", function (e) {
    const email = document.getElementById("updateEmail").value;
    const nname = document.getElementById("updateName").value;

    let rs = JSON.parse(localStorage.getItem("rs")) || [];
    const r = rs.find((r) => r.email === email);

    if (r) {
      r.name = nname;
      localStorage.setItem("rs", JSON.stringify(rs));
      alert("Name is updated");
      display();
    } else {
      alert("Email not found.");
    }
  });
}

const df = document.getElementById("dd");
if (df) {
  df.addEventListener("submit", function (e) {
    const email = document.getElementById("deleteEmail").value;
    const exam = document.getElementById("deleteExam").value;

    let rs = JSON.parse(localStorage.getItem("rs")) || [];
    const newRs = rs.filter((r) => !(r.email === email && r.exam === exam));

    if (newRs.length !== rs.length) {
      localStorage.setItem("rs", JSON.stringify(newRs));
      display();
    } else {
      alert("Email not matched.");
    }
  });
}

window.onload = function () {
  display();
};



 
      