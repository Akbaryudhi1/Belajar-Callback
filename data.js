function getData(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      return cb(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
const app = document.getElementById("app");
function renderTable(data) {
  const table = document.createElement("table");
  const headerBaris = document.createElement("tr");
  const judulKolom1 = document.createElement("th");
  judulKolom1.innerText = "ID";
  const judulKolom2 = document.createElement("th");
  judulKolom2.innerText = "Name";
  const judulKolom3 = document.createElement("th");
  judulKolom3.innerText = "Email";
  const judulKolom4 = document.createElement("th");
  judulKolom4.innerText = "Address";
  const judulKolom5 = document.createElement("th");
  judulKolom5.innerText = "Company";

  headerBaris.appendChild(judulKolom1);
  headerBaris.appendChild(judulKolom2);
  headerBaris.appendChild(judulKolom3);
  headerBaris.appendChild(judulKolom4);
  headerBaris.appendChild(judulKolom5);
  table.appendChild(headerBaris);
  data.forEach((item) => {
    const baris = document.createElement("tr");
    const idBaris = document.createElement("td");
    idBaris.innerText = item.id;
    const nameBaris = document.createElement("td");
    nameBaris.innerText = item.name;
    const emailBaris = document.createElement("td");
    emailBaris.innerText = item.email;
    const addressBaris = document.createElement("td");
    addressBaris.innerText = `${item.address.street}, ${item.address.city}`;
    const companyBaris = document.createElement("td");
    companyBaris.innerText = `${item.company.name}`;
    baris.appendChild(idBaris);
    baris.appendChild(nameBaris);
    baris.appendChild(emailBaris);
    baris.appendChild(addressBaris);
    baris.appendChild(companyBaris);
    table.appendChild(baris);
  });
  app.appendChild(table);
}
const data = getData("https://jsonplaceholder.typicode.com/users", renderTable);
window.addEventListener("load", () => {});
