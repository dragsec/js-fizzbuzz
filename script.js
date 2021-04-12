listaNum = []

for (var i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        listaNum.push("FizzBuzz")
    }else if(i % 5 === 0){
        listaNum.push("Buzz")
    }else if(i % 3 === 0){
        listaNum.push("Fizz")
    }else{
        listaNum.push(i)
    }
} 


console.log(listaNum);
document.getElementById("listaNum").innerHTML=listaNum;


