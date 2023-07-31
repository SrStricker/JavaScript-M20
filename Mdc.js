function MDC(a, b) {
    if (b === 0) {
        return a;
    } else {
        return MDC(b, a % b);
    }
}

console.log(MDC(8, 40));