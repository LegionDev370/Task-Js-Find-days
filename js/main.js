let clickBtn = document.querySelector("button");
let inputBtn = document.querySelector("input");

clickBtn.addEventListener("click", () => {
  let inputValue = inputBtn.value;
  if (!isNaN(inputValue)) {
    switch (inputValue) {
      case "0":
        alert("Sunday");
        break;
      case "1":
        alert("Monday");
        break;
      case "2":
        alert("Tuesday");
        break;
      case "3":
        alert("Wednesday");
        break;
      case "4":
        alert("Thursday");
        break;
      case "5":
        alert("Friday");
        break;
      case "6":
        alert("Saturday");
        break;
    }
    if (inputValue < 0) {
      alert("Please enter greater than zero");
    }else if (inputValue === ""){
        alert("Please write")
    }
  } else {
    alert("Please enter number only");
  }
});
