function myBind(func, context, bindArgs) {
    function wrapper() {
        let args = Object.assign(bindArgs, arguments);
        return func.apply(context, args);
    }
    return wrapper;
}
const pow5 = myBind(Math.pow, Math, [undefined, 5])
const cube = myBind(Math.pow, Math, [undefined, 3]);
alert(pow5(2)); //32
alert(cube(3)); //27
const zeroPrompt = myBind(prompt, window, [undefined, "0"])
const someNumber = zeroPrompt("Введите число")
alert(someNumber);