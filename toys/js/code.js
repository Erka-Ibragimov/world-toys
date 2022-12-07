const sendMyEmail = document.querySelector("button");
const h1 = document.querySelector("h1");
sendMyEmail.addEventListener("click", async (e) => {
  e.preventDefault();
  const value = document.querySelector(".textMyEmail");
  let obj = {
    [value.name]: value.value,
  };
  await fetch("http://localhost:7000/toys/code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then((data) => {
      h1.innerHTML = data.message;
      if (data.message != "Не правильный код") {
        window.history.back();
        // setTimeout(() => {
        //   window.location.href = "index.html";
        // }, 10000);
      }
    })
    .catch((error) => console.log(error));
});
