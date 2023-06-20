function addBox(goal, image, explain) {
  const img = document.createElement("img");
  img.setAttribute('src', image);
  img.setAttribute('alt', goal);
  const p = document.createElement("p");
  p.innerHTML = explain;
  const div = document.createElement("div");
  div.classList.add("box");
  div.appendChild(img);
  div.appendChild(p);
  document.querySelector("#container").appendChild(div);

  const li = document.createElement("li");
  li.classList.add("menu");
  li.innerHTML = goal;
  document.querySelector("#bar").appendChild(li);
}

function loadInfo(e){
  e.preventDefault();
  const goal = document.getElementById("goal").value;
  const image = document.getElementById("img").value;
  const explain = document.getElementById("explain").value;
  addBox(goal, image, explain);
  closeWindow();
}


document.getElementById("window").addEventListener("submit", loadInfo);
