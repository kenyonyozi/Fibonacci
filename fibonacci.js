function fib(num) {
    
    if (num <= 1)    // Validate input and also base number
        return num;
    return fib(num-1) + fib(num-2);
}


module.exports = fib;
