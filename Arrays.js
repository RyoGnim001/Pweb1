let alunos = [
    {nome: 'Rafael', nota: 7, cidade: 'João Pessoa'},
    {nome: 'Fernando', nota: 10, cidade: 'Dona Inês'},
    {nome: 'Bernado', nota: 5, cidade: 'Campina Grande'}

]

let alunsoPontoExtra = alunos.map(aluno => ({...aluno, nota: aluno.nota >= 7 ? aluno.nota + 2 : aluno.nota}))

let aprovados = alunsoPontoExtra.filter( aluno => aluno.nota >= 7);
let reprovados = alunsoPontoExtra.filter( aluno => aluno.nota < 7 );

let somaNotaAprovados = aprovados.reduce((acumulador,aluno) => acumulador + aluno.nota, 0);

console.log(`Alunos: `, alunos);
console.log(`Alunos com ponto extra: `, alunsoPontoExtra);
console.log(`Alunos Aprovados: `, aprovados);
console.log(`Alunos reprovados: `, reprovados);
console.log(`Soma da nota dos Aprovados: `, somaNotaAprovados);