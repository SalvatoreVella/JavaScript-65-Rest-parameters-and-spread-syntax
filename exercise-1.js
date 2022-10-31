function sum(...rest) {
    let sum = 0;
    for (val of rest) {
    sum += val;
}
return sum;
}

console.log(sum(1, 2, 3, 4, 5));