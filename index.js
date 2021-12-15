function handleClick() {
  alert("Clicked");
}

let drums = document.getElementsByClassName("drum");
for (let count = 0; count < drums.length; count++) {
  drums[count].addEventListener("click", handleClick);
}
