module.exports = function reverse (n) {
    
    let array = String(n).split("");

    if (array[0] === "-")  {
        array.shift();
    }

    return Number(array.reverse().join(''));
}
