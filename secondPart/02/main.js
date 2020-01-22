let group = [{
        name: 'Dan',
        lastName: 'Yaslik',
        age: '19',
        notebook: 'true'
    },
    {
        name: 'Evgeniy',
        lastName: 'Silin',
        age: '22',
        notebook: 'false'
    }
]

function getStudentList(arrayOfStudent) {
    jsonMas = []
    strochMas = []

    for (let student of arrayOfStudent) {
        jsonMas.push(JSON.stringify(student))
        let currentStudent = ''
        for (let svoystvoVMasive in student) {
            currentStudent += svoystvoVMasive + ':' + student[svoystvoVMasive] + ' '
        }
        strochMas.push(currentStudent)
    }
    console.log("studentJson : " + jsonMas)
    console.log("strochStudent : " + strochMas)
}

function addNewStudent(name, lastName, age, notebook) {
    let three = {
        name: name,
        lastName: lastName,
        age: age,
        notebook: notebook
    }
    group.push(three)

    console.log(group)
}
addNewStudent('Denis', 'Jera', '29', 'true')

getStudentList(group)