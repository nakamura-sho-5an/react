import "./styles.css";

const onclick = () => {
  const text = document.getElementById("addtext").value;
  document.getElementById("addtext").value = '';

  const div = document.createElement("div");

  div.className = "listrow";
  const li = document.createElement("li");

  li.innerText = text;

  const completebutton = document.createElement("button");
  completebutton.innerText = "完了"
  completebutton.addEventListener("click" , () => {
    alert("完了");
  });

  const deletebutton = document.createElement("button")
  deletebutton.innerText = '削除';
  deletebutton.addEventListener("click", () => {
    alert("削除");
  });

  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  document.getElementById("incompletelist").appendChild(div)
  console.log(div);
};



document.getElementById("add").addEventListener("click" , () => onclick());