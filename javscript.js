let counter = 1;
document.getElementById("plus").onclick = () => {
  counter++;
  document.getElementById("number").value = counter;
};
document.getElementById("minus").onclick = () => {
  counter--;
  if (counter >= 1) {
    document.getElementById("number").value = counter;
  }
};
