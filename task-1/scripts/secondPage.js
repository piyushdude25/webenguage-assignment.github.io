var contact = JSON.parse(localStorage.getItem("detail"));
console.log(contact);

document.querySelector("#container2").innerText = "";
contact.map((item) => {
  var tr = document.createElement("div");
  console.log("ok:", item);
  var td1 = document.createElement("h3");
  td1.innerText = `Email:${item.email}`;
  td1.style.textAlign = "center";
  td1.setAttribute("class", "mail");
  var tr1 = document.createElement("div");
  tr1.setAttribute("class", "code");
  var td2 = document.createElement("h3");
  td2.innerText = `${item.mobile}`;
  td2.style.textAlign = "center";
  var td3 = document.createElement("h3");
  td3.innerText = `Mobile No:+${item.code.s.dialCode}-`;
  td3.style.textAlign = "center";
  tr.append(td1, td3, td2);
  document.querySelector("#container2").append(tr);
});
