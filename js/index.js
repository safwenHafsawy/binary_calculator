//Variables
let res = document.getElementById("res");
let oct = document.getElementById("oct");
let dec = document.getElementById("dec");
let hex = document.getElementById("hex");
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

//clearing the display
btnClr.addEventListener("click", () => {
  res.innerText = "";
  operand1 = "";
  operand2 = "";
  operator = "";
  btn0.disabled = false;
  btn1.disabled = false;
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
    operand1 += "0";
    res.innerText += "0";
  } else {
    operand2 += "0";
    res.innerText += "0";
  }
});

btn1.addEventListener("click", () => {
  if (!operator) {
    operand1 += "1";
    res.innerText += "1";
  } else {
    operand2 += "1";
    res.innerText += "1";
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
      result = firstInt / secondInt;
      result = Math.floor(result);
      break;
  }
  try {
    res.innerText = result.toString(2);
    operand1 = res.innerText;
    operand2 = "";
    operator = "";
  } catch {
    res.innerText = "Error";
  }
};

//converting
hex.onclick = () => {
  let hex = parseInt(operand1, 2).toString(16).toUpperCase();
  btn0.disabled = true;
  btn1.disabled = true;
  res.innerText = hex.toString(16);
};
oct.onclick = () => {
  let oct = parseInt(operand1).toString(8);
  btn0.disabled = true;
  btn1.disabled = true;
  res.innerText = oct;
};
dec.onclick = () => {
  let dec = parseInt(operand1, 2).toString(10);
  btn0.disabled = true;
  btn1.disabled = true;
  res.innerText = dec;
};
