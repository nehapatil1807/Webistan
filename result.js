document.addEventListener("DOMContentLoaded", () => {
  const resultb = document.getElementById("rb");
  const er = JSON.parse(localStorage.getItem("result"));

  if (er) {
    const r = document.createElement("tr");
    r.innerHTML = `<td>${er.exam}</td>
                       <td>${er.score}</td> 
                       <td>${er.date}</td>`;
    resultb.appendChild(r); // add new content to webpage 
  } else {
    resultb.innerHTML = "<tr><td colspan='3'>No results found</td></tr>";
  }
});
