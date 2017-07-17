(function() {

  // Although JavaScript is object-oriented language, it isn't a class-based language—it's a prototype-based language.

  // Two types of constructors: native and custom.
  // native: Object(), Array(), Number(), Boolean(), Date(), String(), Function(), Error() and RegExp().

  // Javascript objects are a way of keeping data contained and well-organized
  var batman = {
    evil: false,
    realName: 'Bruce Wayne',
    powers: [
      'exceptional martial artist', 'combat strategy', 'inexhaustible wealth', 'brilliant deductive skill', 'advanced technology'
    ],
    alias: [
      'Dark Knight', 'Caped Crusader', 'Matches Malone'
    ],
    greeting: function() {
      console.log(`Hello, my name is ${this.realName}.`);
      return;
    }
  }

  var harleyQuinn = {
    evil: true,
    powers: [
      'superhuman agility', 'enhanced strength', 'intelligence'
    ],
    baseOfOperations: 'Gotham',
    realName: 'Harleen Quinzel',
    greeting: function() {
      console.log(`Hello, my name is ${this.realName}.`);
      return;
    }
  }

  // var krypto = {
  //   evil: false,
  //   powers: ['super strength', 'flight', 'invulnerability', 'super speed', 'heat vision', 'freeze breath', 'x-ray vision', 'superhuman hearing', 'healing factor'],
  //   realName: 'Krypto',
  //   greeting: function() {
  //     console.log(`Hello, my name is ${this.realName}.`);
  //     return;
  //   }
  // }

  batman.greeting();

  // a constructor is a function that is used to create objects
  function Hero() {
    // with a constructor, you can define properties and methods on an object
    this.evil = false,
    this.greeting = function() {
      if (this.realName) {
        console.log(`Hello, my name is ${this.realName}.`);
      }
      return;
    }
  }

  // When using constructors, 'this' takes on a special meaning. When invoked with new, this is the object being constructed
  // If you forget the new keyword before the constructor, 'this' will be set equal to the global object (window) and you will be unintentionally modifying the global object; if you use 'use strict', 'this' will be assigned the value of undefined
  var krypto = new Hero({
    powers: [
      'super strength',
      'flight',
      'invulnerability',
      'super speed',
      'heat vision',
      'freeze breath',
      'x-ray vision',
      'superhuman hearing',
      'healing factor'
    ],
    realName: 'Krypto'
  });

  krypto.greeting(); // returns undefined because options object that was passed it was not extended to 'this'

  // a constructor is a function that is used to create objects
  // A constructor is always capitalized (convention)
  function Hero(options) {
    // var options = options || {};

    // with a constructor, you can define properties and methods on an object
    var defaults = {
      evil: false,
      greeting: function() {
        if (this.realName) {
          console.log(`Hello, my name is ${this.realName}.`);
        }
        return;
      }
    }

    // a constructor will return this by default
    // otherwise, it will return whatever you return from the constructor (as long as it is an object; otherwise, it will return this)
    $.extend(this, defaults, options);
  }

  var krypto = new Hero({
    powers: [
      'super strength',
      'flight',
      'invulnerability',
      'super speed',
      'heat vision',
      'freeze breath',
      'x-ray vision',
      'superhuman hearing',
      'healing factor'
    ],
    realName: 'Krypto'
  });

  krypto.greeting(); // Hello, my name is Krypto.

  // Object.prototype.constructor
  function Tree(name) {
    this.name = name;
  }

  var theTree = new Tree('Redwood');
  // you have access to constructor property on each instance
  console.log('theTree.constructor is ' + theTree.constructor);

  theTree.constructor = function Tree(name) {
    this.name = name;
  }

  // updating the prototype chain

  function Car(options) {
    var options = options || {};
    var defaults = {
      tires: 4,
      abs: true,
      radio: true
    };

    $.extend(this, defaults, options);
  }

  var herCar = new Car({color: 'red', make: 'hyundai', model: 'sonata'});

  var hisCar = new Car({color: 'blue', make: 'subaru', model: 'outback'});

  Car.prototype.sound = 'beep beep'; // previous instances are updated

  herCar.sound; // 'beep, beep'
  hisCar.sound; // 'beep, beep'

  herCar.sunroof = false;

  herCar.sunroof; // false
  hisCar.sunroof; // undefined

  // Inheritance continued

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

  // pass the Mammal properties/methods down to Dog by attaching them to Dog prototype chain
  Dog.prototype = new Mammal();

  var oz = new Dog();
  console.log(`Oz has ${oz.legs} legs.`); // returns 'Oz has 4 legs.'
  console.log(`Oz is ${oz.endothermic
    ? 'warm-blooded'
    : 'cold-blooded'}`);

  // inheritance can be demonstrated by using the Object.create() method

  var parent = {
    sayName: function() {
      console.log('Hey my name is ' + this.name);
    },
    name: 'ParentPerson'
  }

  var child = Object.create(parent);
  child.name = "ChildPerson";

  //Because of inheritance . . .
  child.sayName();
  //console.log output => "ChildPerson"

  var grandChild = Object.create(child);

  // the sayName() method travels up the chain in search of a name value
  grandChild.sayName();
  //output => "ChildPerson"

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

  // short answer solutions
  // Q: What is a downfall of attaching a method to the object constructor (binding a method to 'this' inside the function object)
  // A: Any method attached this way will get re-declared for every new instance created, negatively affecting memory usage if you are creating many instances.
  // A: If you apply the method to the object's prototype, it is only stored in the memory once, and all instances of that object will have access to that method.
  // Q: Why is it important to use the new operator when creating an instance of an object?
  // A: If you forget the new keyword before the constructor, 'this' will be set equal to the global object (window) and you will be unintentionally modifying the global object.

})();
