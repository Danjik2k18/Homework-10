let arr = [1, 2, 5, 10, 20, 3];

function myFunc() {
    newArr = [];
    for (; arr.length;) {
        newArr.push(arr.splice(arr.indexOf(Math.min(...arr)), 1)[0])
    }
    console.log(newArr)
}
myFunc();