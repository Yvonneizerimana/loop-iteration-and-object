//allow function with two parameters.

const sum=(firstParm,secondParam)=>{

    return firstParm+secondParam;

};

console.log(sum(3,6));

//allow function with one parameter.

const printHello=()=>{
    console.log("hello");
};
printHello();

//allow function with a single parameter.

const chechWeight=weight=>{
    console.log(`my weight is ${weight} kg`);
}

chechWeight(54);

//concise allow function

const multiply=(a,b)=>a*b;

console.log(multiply(4,5));

