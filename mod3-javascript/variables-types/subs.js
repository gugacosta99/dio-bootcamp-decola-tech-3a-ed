function subs(array){
    if(array.length > 0){
        for(let i=0; i < array.length; i++){
            if(array[i] % 2 == 0){
                array[i] = 0;
            }
        }
        return array;
    } else {
        return -1;
    }
}

console.log(subs([1, 3, 4, 6, 80, 33, 23, 90]));
console.log(subs([]));