var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var i = 0; i > 5; i++) {
  letters += "WILLOW";
}

// title "willow"
document.getElementById("title").onmouseover = (event) => {
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (letter == " ") {
          return letter;
        }
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, 34.5);
};

// const blob = document.getElementById("blob");
// 
// document.body.onpointermove = (event) => {
//   const { clientX, clientY } = event;
// 
//   blob.style.left = `${clientX}px`;
//   blob.style.top = `${clientY}px`;
// };
