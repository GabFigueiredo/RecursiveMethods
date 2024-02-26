function fibonacci(e) {
    if (e < 2) {
        return  e
    }
    else {
    return (fibonacci(e-1) + fibonacci(e-2))
    }
}

function loop(n) {
    const array = []

    for (let i = 0; i < n; i++) {
        array.push(fibonacci(i))
    }

    console.log(array)
}

console.log(loop(8))