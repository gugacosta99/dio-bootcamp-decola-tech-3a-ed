var input = document.getElementsByName("input")[0];
var text = document.getElementById("text");

//text.innerHTML = list;

function getInput(){
  var t = document.createElement("input");
  t.setAttribute("type", "checkbox");
  var u = document.createElement("label");
  u.innerHTML = input.value;
}

//text.innerHTML = list;

/* var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

var hello = document.getElementById("hello");
var buttonSub = document.getElementsByName("subtrair")[0];
var buttonAdd = document.getElementsByName("adicionar")[0];
//buttonSub.addEventListener("click", atention());


//buttonAdd.disabled = false;

function increment(){
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if(currentNumber >= 0){
    currentNumberWrapper.style.color = 'gray';
  }
  if(currentNumber >= 10){
    buttonAdd.disabled = true;
  }
  if(currentNumber > -10){
    buttonSub.disabled = false;
  }
}

function decrement(){
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if(currentNumber < 0){
    currentNumberWrapper.style.color = 'red';
  }
  if(currentNumber < 10){
    buttonAdd.disabled = false;
  }
  if(currentNumber <= -10){
    buttonSub.disabled = true;
  }
}

function atention (){
  decrement();
  hello.innerHTML = "ATENTION";
} */