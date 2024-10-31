// The Adapter 
// allows two objects with incompatible interfaces to interact with each other.
// Let's say, for example, that your application consults an API that returns XML and sends that 
// information to another API to process that information. But the processing API expects JSON. 
// You can't send the information as it's received since both interfaces are incompatible. You need to adapt it first.

// Our array of cities
const citiesHabitantsInMillions = [
    { city: "London", habitants: 8.9 },
    { city: "Rome", habitants: 2.8 },
    { city: "New york", habitants: 8.8 },
    { city: "Paris", habitants: 2.1 },
] 

// The new city we want to add
const BuenosAires = {
    city: "Buenos Aires",
    habitants: 3100000
}

// Our adapter function takes our city and converts the habitants property to the same format all the other cities have
const toMillionsAdapter = city => { city.habitants = parseFloat((city.habitants/1000000).toFixed(1)) }

toMillionsAdapter(BuenosAires)

// We add the new city to the array
citiesHabitantsInMillions.push(BuenosAires)

// And this function returns the largest habitants number
const MostHabitantsInMillions = () => {
    return Math.max(...citiesHabitantsInMillions.map(city => city.habitants))
}

console.log(MostHabitantsInMillions()) // 8.9

// The Decorator pattern 
// lets you attach new behaviors to objects by placing them inside wrapper objects that contain 
// the behaviors. If you're somewhat familiar with React and higher order components (HOC) this kind of approach probably 
// rings a bell for you.
// allows you to dynamically add behavior to an object without altering its structure. 


// Basic User constructor
function User(name) {
    this.name = name;
    this.say = function() {
        console.log("User: " + this.name);
    };
}

// Decorator constructor
function DecoratedUser(user, street, city) {
    this.user = user;
    this.name = user.name; // Ensures the interface stays the same
    this.street = street;
    this.city = city;
    this.say = function() {
        console.log("Decorated User: " + this.name + ", " + this.street + ", " + this.city);
    };
}

// Usage
var user = new User("Kelly");
user.say(); // Output: User: Kelly

var decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.say(); // Output: Decorated User: Kelly, Broadway, New York


// The Proxy pattern 
// provides a substitute or placeholder for another object. The idea is to control access to the original object,
// performing some kind of action before or after the request gets to the actual original object.

// Again, if you're familiar with ExpressJS this probably rings a bell for you. Express is a framework used to develop
// NodeJS APIs, and one of the features it has is the use of Middlewares. Middlewares are nothing more than pieces of 
// code we can make execute before, in the middle, or after any request reaches our endpoints.

// authenticateToken is jwt authentication middleware
router.get('/:jobRecordId', authenticateToken, async (req, res) => {
    try {
      const job = await JobRecord.findOne({_id: req.params.jobRecordId})
      res.status(200).send(job)
  
    } catch (err) {
      res.status(500).json(err)
    }
  })

// The Facade pattern
// provides a simplified interface to a library, a framework, or any other complex set of classes.

// A simple example could be JavaScript's map, sort, reduce and filter functions, which all work like good 'ol for loops 
// beneath the hood.


