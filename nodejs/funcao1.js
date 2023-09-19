//criação da função normal
function escreverNoConsole(){
    console.log("Primeiro exemplo - função normal")
}

//chama função para executar
escreverNoConsole();

//variação da função normal ou declarada
const escreverNoConsoleVariacao = function(){
    console.log("Segundo exemplo - variação do modo normal") 
}
//chama a função para executar
escreverNoConsoleVariacao();

//arrow function função seta ou flecha
//toda arrow function usar os caracters = junto com >
const escreverComArrow = ()=>{
    console.log("Terceira - Arrow Function") //o return é opcional
}
//chama a função para executar
escreverComArrow();

//arrow function => com parametro
const escreverComArrowParametro = (texto) =>{
    console.log(texto);
} //se tiver apenas um parâmetro pode ser omitido as chave {}
//chama a função para executar
escreverComArrowParametro("Quarto exemplo - usando parâmetro")
escreverComArrow()
escreverComArrowParametro("Outro texto")

//função arrow que vai somar dois valores
const somarDois = (numero1,numero2)=>{
    console.log("A soma é "+(numero1+numero2))
}
//executando
console.log("--------------------------")
somarDois(10,20);

//variação arrow function sem parentes e sem chave
const varianteArrow = texto => console.log(texto)