//crie uma arrow function chamada parImpar que recebe
//um parametro numerico e informar na saida este numero
//e mais um texto conforme a situação
//[numero], este valor é negativo
//[numero], este valor é neutro
//[numero], este valor é par
//[numero], este valor e impar

const parImpar = (numero)=>{
    if(numero < 0){
        console.log(numero+" Este número é negativo")
    }
    else if(numero == 0){
        console.log("O número "+numero+" é neutro")
    }
    else if((numero % 2)==0){
        console.log("O número "+numero+" é Par");
    }
    else{
        console.log("O número "+numero+" é Impar")
    }
}

parImpar(40);
parImpar(0);
parImpar(13);
parImpar(-1000);