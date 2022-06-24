/* function listEven(array){
  var evenNum = [];
  for(let i=0; i<array.length; i++){
    if(array[i]%2 == 0){
      evenNum.push(array[i]);
    }
  }
  console.log(evenNum);
}
  
//listEven([1, 2, 3, 4, 5, 6, 7]);

console.log("hello"); */

var currentNumberWrapper = document.getElementById("currentNumber");
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
}