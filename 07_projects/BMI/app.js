const form = document.querySelector("form");

form.addEventListener("submit",function (e){
  e.preventDefault();
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const results = document.querySelector("#results");
  const bmi = weight / ((height / 100) * (height / 100));

  if(height === "" || isNaN(height)){
    results.innerHTML = "Please enter your height";
  }else if(weight === "" || isNaN(weight)){
    results.innerHTML = "Please enter your weight";
  }else{
    results.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
  }

})