function sum() {
    let count = 0;
    for (let i = 0; i < arguments.length; i++) {
        count += arguments[i];
    }

    return count;
}

console.log(sum(1,2,3,4,5))