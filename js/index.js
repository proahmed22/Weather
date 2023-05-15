let Human = {
    isAlive : true,
    eat: function(meal){
        console.log('U Will eat' + meal);
    }
}

let Person = {
    name: 'ahmed',
    age : 26
}


let Doctor = {
    
    dept: 'a5',
    Uni : 'cairo'
}

Object.setPrototypeOf(Person,Human)
Object.setPrototypeOf(Doctor,Person)

console.log(Doctor)
