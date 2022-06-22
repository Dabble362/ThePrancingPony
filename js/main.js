document.querySelector("#charName").addEventListener("click", makeReq);

async function makeReq() {
  const userName = document.querySelector("#charName").value;
  const res = await fetch(`/api?student=${userName}`);
  const data = await res.json();

  console.log(data);
  document.querySelector("#personName").textContent = data.name;
  document.querySelector("#personStatus").textContent = data.status;
  document.querySelector("#personOccupation").textContent =
    data.currentOccupation;
}
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((res) => res.json()) // parse response as JSON
//   .then((data) => {
//     console.log(data.message);
//     document.querySelector("img").src = data.message;
//   })
//   .catch((err) => {
//     console.log(`error ${err}`);
//   });
