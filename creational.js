// Singleton Pattern

// Singleton is a design pattern that ensures that a class has only one immutable instance. 
// Said simply, the singleton pattern consists of an object that can't be copied or modified. 
// It's often useful when we want to have some immutable single point of truth for our application.

const Config = {
    start: () => console.log('App has started'),
    update: () => console.log('App has updated'),
  }
  
  // We freeze the object to prevent new properties being added and existing properties being modified or removed
  Object.freeze(Config)
  
  Config.start() // "App has started"
  Config.update() // "App has updated"
  
  Config.name = "Robert" // We try to add a new key
  console.log(Config) // And verify it doesn't work: { start: [Function: start], update: [Function: update] }

  

//   The Factory method pattern 
//   provides an interface for creating objects that can be modified after creation. 
//   The cool thing about this is that the logic for creating our objects is centralized in a single place, simplifying and better organizing our code.

class Alien {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

const alien1 = new Alien("Ali", "I'm Ali the alien!")
console.log(alien1.name) // output: "Ali"

// The Abstract Factory pattern 
// allows us to produce families of related objects without specifying concrete classes. 
// It's useful in situations where we need to create objects that share only some properties and methods.

// Basically it just adds an abstraction layer over the factory method pattern, so that we can create many 
// different types of objects, but still interact with a single factory function or class.

// We have a class or "concrete factory" for each vehicle type
class Car {
    constructor () {
        this.name = "Car"
        this.wheels = 4
    }
    turnOn = () => console.log("Chacabúm!!")
}

class Truck {
    constructor () {
        this.name = "Truck"
        this.wheels = 8
    }
    turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!")
}

class Motorcycle {
    constructor () {
        this.name = "Motorcycle"
        this.wheels = 2
    }
    turnOn = () => console.log("sssssssssssssssssssssssssssssshhhhhhhhhhham!!")
}

// And abstract factory that works as a single point of interaction for our clients
// Given the type parameter it receives, it will call the corresponding concrete factory
const vehicleFactory = {
    createVehicle: function (type) {
        switch (type) {
            case "car":
                return new Car()
            case "truck":
                return new Truck()
            case "motorcycle":
                return new Motorcycle()
            default:
                return null
        }
    }
}

const car = vehicleFactory.createVehicle("car") // Car { turnOn: [Function: turnOn], name: 'Car', wheels: 4 }
const truck = vehicleFactory.createVehicle("truck") // Truck { turnOn: [Function: turnOn], name: 'Truck', wheels: 8 }
const motorcycle = vehicleFactory.createVehicle("motorcycle") // Motorcycle { turnOn: [Function: turnOn], name: 'Motorcycle', wheels: 2 }


// The Builder pattern is used to create objects in "steps". 
// Normally we will have functions or methods that add certain properties or methods to our object.
// The cool thing about this pattern is that we separate the creation of properties and methods into different entities.

// We declare our objects
const bug1 = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!"
}

const bug2 = {
    name: "Martiniano Buggland",
    phrase: "Can't touch this! Na na na na..."
}

// These functions take an object as parameter and add a method to them
const addFlyingAbility = obj => {
    obj.fly = () => console.log(`Now ${obj.name} can fly!`)
}

const addSpeechAbility = obj => {
    obj.saySmthg = () => console.log(`${obj.name} walks the walk and talks the talk!`)
}

// Finally we call the builder functions passing the objects as parameters
addFlyingAbility(bug1)
bug1.fly() // output: "Now Buggy McFly can fly!"

addSpeechAbility(bug2)
bug2.saySmthg() // output: "Martiniano Buggland walks the walk and talks the talk!"


// The Prototype pattern 
// allows you to create an object using another object as a blueprint, inheriting its properties and methods.
// If you've been around JavaScript for a while, you're probably familiar with prototypal inheritance and how JavaScript works around it.

// We declare our prototype object with two methods
const enemy = {
    attack: () => console.log("Pim Pam Pum!"),
    flyAway: () => console.log("Flyyyy like an eagle!")
}

// We declare another object that will inherit from our prototype
const bugg1 = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!"
}

// With setPrototypeOf we set the prototype of our object
Object.setPrototypeOf(bugg1, enemy)

// With getPrototypeOf we read the prototype and confirm the previous has worked
console.log(Object.getPrototypeOf(bugg1)) // { attack: [Function: attack], flyAway: [Function: flyAway] }

console.log(bugg1.phrase) // Your debugger doesn't work with me!
console.log(bugg1.attack()) // Pim Pam Pum!
console.log(bugg1.flyAway()) // Flyyyy like an eagle!


