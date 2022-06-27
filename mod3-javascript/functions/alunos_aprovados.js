function alunos_ap(mf, alunos){
    let r = [];

    for(aluno of alunos){
        const {nota, nome} = aluno; //OBJECT DESTRUCTURING

        if(nota >= mf){
            r.push(nome);
        }
    }

    /*for(aluno of alunos){
        if(aluno.nota >= mf){
            r.push(aluno.nome);
        }
    } */

    /* for(let i=0; i<alunos.length; i++){
        if(alunos[i].nota >= mf){
            r.push(alunos[i].nome);
        }
    } */

    return r;
}

function teste(){
    const alunos = [
        {nome: "Alberto", nota: 7, turma: "1A"}, 
        {nome: "Bruna", nota: 2, turma: "1B"}, 
        {nome: "Carlos", nota: 6, turma: "1B"}, 
        {nome: "Danielle", nota: 10, turma: "1A"}, 
        {nome: "Eduardo", nota: 0, turma: "1A"}
    ]

    console.log(alunos_ap(10, alunos));
    console.log(alunos_ap(5, alunos));
    console.log(alunos_ap(7, alunos));
}

teste();