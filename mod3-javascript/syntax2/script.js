function atividade(n1, n2){
    const soma = n1 + n2;
    var equal, over10, over20;
    var r;

    if(n1 == n2){
        equal = "são";
    } else {
        equal = "não são";
    }

    if(soma > 10) {
        over10 = "maior que";
    } else if (soma < 10) {
        over10 = "menor que";
    } else {
        over10 = "igual a";
    }

    if(soma > 20) {
        over20 = "maior que";
    } else if (soma < 20) {
        over20 = "menor que";
    } else {
        over20 = "igual a";
    }

    r = "Os números " + n1 + " e " + n2 + " " + equal + " iguais. Sua soma é " + soma + ", que é " + over10 + " 10 e " + over20 + " 20"
    return r;
}

function teste(n1, n2){
    var o = atividade(n1, n2);

    console.log("...\nInput: " + n1 + ", " + n2);
    console.log("Output: " + o + ".\n...");
}

teste(1, 2);
/* teste(5, 5);
teste(10, 10);
teste(3, 7);
teste(40, 70);
teste(14, 6);
teste(3, 6);
teste(12, 6); */
