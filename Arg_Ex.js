function sum1() {
    let count = 0;
    for (let i = 0; i < arguments.length; i++) {
        count += arguments[i];
    }

    return count;
}

console.log(sum1(1,2,3,4,5))

function sum2(...args) {
    let count = 0;
    args.forEach((num) => count += num);
    return count;
}

console.log(sum2(1,2,3,4,5))
