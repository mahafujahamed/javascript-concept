// syntactic sugar---

class Instructor{
    name;
    desination = 'web developer'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSuppoertSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}

const mongol = new Instructor('mahafuj', 'canada');
console.log(mongol);
mongol.startSuppoertSession('9.00');
mongol.createQuiz(50);

const gavod = new Instructor('rakib', 'dhaka');
console.log(gavod);