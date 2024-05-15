// let data = new Date()



// let data_r = data.getDate()+"/"+ data.getMonth()+"/"+ data.getFullYear()
// document.getElementById("hora").innerText = data_r;

// let i = [1,2,3,4];

// for(let j = 0 ; j < i; j++){
   
   
// }
// const mudanca = i.unshift(5, 6);
// console.log(i);
// console.log(mudanca);

// function sanar(n1, n2){
//     return n1 + n2
// }
// console.log(sanar(2,6))

// let data = new Date();

// console.log(data.getDate()+"/"+ data.getMonth()+"/"+ data.getFullYear())

// let a = [1,2,3,4]
//     console.log(a.reverse())
// console.log(a.sort())

function funcao(){
    let meu = document.getElementById("txt");
    let vel = Number(meu.value);
    let res =document.getElementById("res");
    res.innerText = `esta velocidade é ${vel}`

    if(vel > 20){
        document.getElementById("res2").innerHTML= "oloco"
    }else{
        document.getElementById("res2").innerHTML= "ACELERA!!!!"
    }
}

let mat = document.getElementById("manipular")

mat.innerHTML= Math.random()