let arr = ['Григорий', 'Анатолий']
let arrOne = ['Лепс', 'Гречкин']
let newMas = []

for (let i = 0; i < arr.length && i < arrOne.length; i++) {
    newMas = arr[i] + ' '.concat(arrOne[i])
    console.log('newArray [ i ] = ' + '"' + newMas + '"')
}