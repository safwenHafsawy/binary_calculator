//Variables
let res = document.getElementById("res");
let btns = document.getElementById("btns");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btnClr = document.getElementById("btnClr");
let btnEql = document.getElementById("btnEql");
let btnSum = document.getElementById("btnSum");
let btnSub = document.getElementById("btnSub");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");
let operand1 = "",
  operand2 = "",
  operator = "";

//clearing the res
btnClr.addEventListener("click", () => {
  res.innerText = "";
  operand1 = "";
  operand2 = "";
  operator = "";
});
//adding the operator
btnSum.onclick = () => {
  operator += "+";
  res.innerText += operator;
};
btnSub.onclick = () => {
  operator += "-";
  res.innerText += operator;
};
btnMul.onclick = () => {
  operator += "*";
  res.innerText += operator;
};
btnDiv.onclick = () => {
  operator += "/";
  res.innerText += operator;
};
//adding the operands
btn0.addEventListener("click", () => {
  if (!operator) {
    operand1 = "0";
    res.innerText += operand1;
  } else {
    operand2 = "0";
    res.innerText += operand2;
  }
});

btn1.addEventListener("click", () => {
  if (!operator) {
    operand1 = "1";
    res.innerText += operand1;
  } else {
    operand2 = "1";
    res.innerText += operand2;
  }
});
//making the calculations
btnEql.onclick = () => {
  let result;
  let firstInt = parseInt(operand1, 2);
  let secondInt = parseInt(operand2, 2);
  switch (operator) {
    case "+":
      result = firstInt + secondInt;
      break;
    case "-":
      result = firstInt - secondInt;
      break;
    case "*":
      result = firstInt * secondInt;
      break;
    case "/":
      resultI = firstInt / secondInt;
      break;
  }
  res.innerText = result;
};
