function palindromo1(str0){
    let str1 = str0.split(" ");
    str1 = str1.join("");
    //console.log(str1);

    let str2 = str0.split(" ");
    str2 = str2.join("");
    str2 = str2.split("");
    str2.reverse();
    str2 = str2.join("");
    //console.log(str2);

    return str1 == str2;
}

function palindromo2(str){
    let r = true;

    for(let i = 0, j = str.length-1; i < j; i++, j--){
        while(str[i] == ' '){
            i++;
        }
        while(str[j] == ' '){
            j--;
        }

        if(str[i] != str[j]){
            r = false;
        }
    }

    return r;
}

function teste(str){
    console.log(str + ": " + palindromo1(str));
    console.log(str + ": " + palindromo2(str));
}


teste("ovo");
teste("ova");
teste("raiar");
teste("raios");
teste("ama");
teste("nam");
teste("radar");
teste("redor");
teste("roma me tem amor");
teste("roma me tem amo");