//אירועי דפדפן*********************************************************************
//task #1
document.addEventListener("DOMContentLoaded", function () {
  const box = document.getElementById("hoverBox");

  // Change color when mouse enters
  box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "orange";
  });
  //task #2
  // Return color when mouse leaves
  box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "gray";
  });
});

//task #3
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("clickBtn");
  const countSpan = document.getElementById("clickCount");
  let count = 0;

  button.addEventListener("click", function () {
    count++;
    countSpan.textContent = count;
  });
});
