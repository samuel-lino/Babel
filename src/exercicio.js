const notasDosAlunos = [{nome: 'Lucas', nota: 7},{nome: 'Maria', nota: 5},{nome: 'Antonio', nota: 3},{nome: 'Gabriela', nota: 9},]

function mostrarAlunoAprovado(listaDeAlunos){
    return listaDeAlunos.filter((e)=>{
        return e.nota >= 6
    })
}

const aprovados = mostrarAlunoAprovado(notasDosAlunos)

console.log(aprovados)