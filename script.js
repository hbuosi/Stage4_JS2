
const students = [
{
  name: "Henrique",
  firstScore: 6,
  secondScore: 10
},
{
  name: "Maria",
  firstScore: 3,
  secondScore: 5
},
{
  name: "Lavinia",
  firstScore: 10,
  secondScore: 8
},
{
  name: "Vicente",
  firstScore: 6,
  secondScore: 6
},
]


function printMediaStudent(students){
  if(((students.firstScore + students.secondScore) / 2) > 7){
    alert(`A média do(a) Aluno(a) ${students.name} é: ${(students.firstScore + students.secondScore) / 2}
    Parabéns, ${students.name}! Você foi aprovado no concurso!`)
  }else{
    alert(`A média do(a) Aluno(a) ${students.name} é: ${(students.firstScore + students.secondScore) / 2}
    Não foi dessa vez ${students.name}! Tente novamente!`)
  }
}

for(let student of students){
  printMediaStudent(student)
}