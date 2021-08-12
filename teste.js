let nome = 'Juliana';
let sobrenome = 'Decarlli';

// Sem template String

console.log('Olá, eu sou' + ' ' + nome + ' ' + sobrenome);

//Com template string

console.log(`Olá, meu nome é ${nome} ${sobrenome}`);


// sem ternario
let isValid = true;

function verify (isValid){

    if(isValid){
        return true;
    } else{
        return false;
    }
}

console.log(verify(isValid));

 // com ternario

 const result = isValid ? true : false;
 let zero = 0;

 const numeroResultado = zero == 0? 0: -1;

 console.log(numeroResultado);

 // sem arrow 

 function soma (x,y){
     return x + y;
 }

 console.log(5+5);

 // com arrow

 const multiplicacao = function (x,y){
     return x*y;
 }
 console.log(multiplicacao(5,5));


 // funcao simplicada
 const dividir = () =>{
     return x/y;

 };