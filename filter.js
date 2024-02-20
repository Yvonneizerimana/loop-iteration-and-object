const randomNumbers=[34,4,2,4,6];

const filteredArray=randomNumbers.filter(num=>{
    return num%3==0;
});
console.log(filteredArray);