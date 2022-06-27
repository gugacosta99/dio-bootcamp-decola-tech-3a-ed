const alunos = [
    {nome: "Alberto", nota: 7, turma: "1A", idade: 22}, 
    {nome: "Bruna", nota: 2, turma: "1B", idade: 19}, 
    {nome: "Carlos", nota: 6, turma: "1B", idade: 35}, 
    {nome: "Danielle", nota: 10, turma: "1A", idade: 18}, 
    {nome: "Eduardo", nota: 0, turma: "1A", idade: 20}
]

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

for(aluno of alunos){
    console.log(calculaIdade.call(aluno, 20));
}

/* function logNumeros(nums){
    for(num of nums){
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];

logNumeros(nums); */