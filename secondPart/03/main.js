let string = 'Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик'
let newString = ''

let newStr = (() => {
    for (var i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 1103 || string.charCodeAt(i) < 1040) {
            newString += string[i]
        }
    }
    console.log(newString) 
})
newStr()