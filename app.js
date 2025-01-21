let counter = 0;
increment = () => {
  counter = counter + 1;
  document.getElementById("count").innerText = counter;
};
decrement = () => {
  if (counter > 0) {
    counter = counter - 1;
    document.getElementById("count").innerText = counter;
  }
};

reset = () => {
  counter = 0;
  document.getElementById("count").innerText = counter;
};
