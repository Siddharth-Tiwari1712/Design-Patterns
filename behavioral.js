// The iterator 
// is used to traverse elements of a collection. This might sound trivial in programming 
// languages used nowadays, but this wasn't always the case.

// Anyway, any of the JavaScript built in functions we have at our disposal to iterate over data structures 
// (for, forEach, for...of, for...in, map, reduce, filter, and so on) are examples of the iterator pattern.


// The Chain of Responsibility 
// passes requests along a chain of handlers. Each handler decides either to process 
// the request or to pass it to the next handler in the chain.

// A typical front-end app that consumes an API could work as an example:

// We have a function responsible for rendering a UI component.

// Once rendered, a another function makes a request to an API endpoint.

// If the endpoint response is as expected, the information is passed to another function that sorts the data in a given way and stores it in a variable.

// Once that variable stores the needed information, another function is responsible of rendering it in the UI.