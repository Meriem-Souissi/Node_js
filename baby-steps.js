const arr = process.argv.slice(2);
const sum = arr.reduce((a, b)=> Number(a) + Number(b),0);
console.log(sum);

