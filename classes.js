// defining Classes
// Classes are "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations

// class declarations
// CLASS DECLARATIONS ARE NOT HOISTED
class Dog {}

// class expressions can be named or unnamed
var Cat = class {};
var Bird = class Bird {};

// The constructor method is a special method for creating and initializing an object created with a class
class Rabbit {
  constructor(options) {
    $.extend(this, options);
  }
}

// use get and set methods to target properties outside the constructor method
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
console.log(square.area);

// The static keyword defines a static method for a class
// Static methods are called without instantiating their class and cannot be called through a class instance

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

// OLD vs. NEW
// OLD ///////////////////////////////////////////////////////////////////////
function Mammal(options) {
  var defaults = {
    endothermic: true,
    hasHair: true,
    vertebrates: true
  }

  $.extend(this, defaults, options);
}

function Dog(options) {
  var defaults = {
    legs: 4,
    sound: 'bark'
  };

  $.extend(this, defaults, options);
}

Dog.prototype = new Mammal();

var oz = new Dog();
console.log(`Oz has ${oz.legs} legs.`); // returns 'Oz has 4 legs.'
console.log(`Oz is ${oz.endothermic
  ? 'warm-blooded'
  : 'cold-blooded'}`);

// NEW ///////////////////////////////////////////////////////////////////////
class Mammal {
  constructor(options){
    var defaults = {
      endothermic: true,
      hasHair: true,
      vertebrates: true
    }

    $.extend(this, defaults, options)
  }
}

// 'extends' keyword is used in class declarations or class expressions to create a class as a child of another class
class Dog extends Mammal {
  // if there is a constructor present in sub-class, it needs to first call super() before using "this".
  constructor(options) {
    super(options);
    var defaults = {
      legs: 4,
      sound: 'bark'
    };
    $.extend(this, defaults, options)
  }
}

var oz = new Dog();
console.log(`Oz has ${oz.legs} legs.`); // returns 'Oz has 4 legs.'
console.log(`Oz is ${oz.endothermic
  ? 'warm-blooded'
  : 'cold-blooded'}`);


// all the functions, methods, constructor, getters or setters are executed in strict mode
// autoboxing will not happen ...
// if a static or prototype method is called without an object valued "this", then the "this" value will be undefined; before it was set to the scope in which the function was called

// supplemental reading
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
