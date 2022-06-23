function listEven(array){
    var evenNum = [];
    for(let i=0; i<array.length; i++){
      if(array[i]%2 == 0){
        evenNum.push(array[i]);
      }
    }
    console.log(evenNum);
  }
  
  listEven([1, 2, 3, 4, 5, 6, 7]);
