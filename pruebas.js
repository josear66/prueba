const someObject = [{
    name : 'jose',
    job : 'developer'
},{
    name : 'pedro',
    job : 'engeener'
}
]

const newObject = [...someObject, 0, {location:'loto'}]

console.log(someObject)
console.log(newObject)