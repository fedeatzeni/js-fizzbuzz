// genera numeri da uno a 100
// se è multiplo di 3 stampa Fizz
// se invece è multiplo di 5 stampa Buzz
// se invece è multiplo di 3 e 5 stampa FizzBuzz
// altrimenti stampa i 

for (i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }
}