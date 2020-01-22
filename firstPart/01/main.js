function makeProfileTimer(doSomething) {
    let time0 = performance.now();
    doSomething();
    return function () {
        let time1 = performance.now();
        console.log("Call to doSomething took " + (time1 - time0) + " milliseconds.");
    }
}

function funcTime() {
    setTimeout(function (car = 'BMW') {
        return car
    }, 1000)
}

const timer = makeProfileTimer(funcTime);
console.log(timer());