(function() {
  'use strict';

  // review
  // function declaration or function statement
  function name() {}

  // function expression
  var thing = function() {
    return;
  }

  // function as a method
  var thing = {
    method: function() {
      console.log('I am a method!');
    }
    return;
  }

  // a function inherits properties and methods from it's prototype

  function Car() {
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

  // The JSON.stringify() method converts a JavaScript value to a JSON string
  var jsonObject = {
    x: 5,
    y: 6
  };
  console.log(typeof JSON.stringify(jsonObject)); // string
  console.log(JSON.stringify(jsonObject)); // '{"x":5,"y":6}' or '{"y":6,"x":5}'; properties of non-array objects are not guaranteed to be stringified in any particular order

  // If an object being stringified has a property named toJSON whose value is a function, then the toJSON() method customizes JSON stringification behavior
  var obj = {
    foo: 'foo',
    toJSON: function() {
      return 'bar';
    }
  };
  JSON.stringify(obj); // '"bar"'
  JSON.stringify({x: obj}); // '{"x":"bar"}'

  // Example of using JSON.stringify() with localStorage
  // var session = {
  //   'screens': [],
  //   'state': true
  // };
  // session.screens.push({'name': 'screenA', 'width': 450, 'height': 250});
  // session.screens.push({'name': 'screenB', 'width': 650, 'height': 350});
  // localStorage.setItem('session', JSON.stringify(session));

  var data = JSON.stringify({x: 5, y: 6});
  data = JSON.parse(data);

  // creating a bound function
  // why?
  // so, no matter how the function is called, it is called with a particular this value
  // e.g ...
  this.x = 9; // global scope variable
  var module = {
    x: 81,
    getX: function() {
      return this.x;
    }
  };

  module.getX(); // 81

  var retrieveX = module.getX;
  retrieveX(); // returns 9 - The function gets invoked at the global scope

  // Create a new function with 'this' bound to module
  // New programmers might confuse the
  // global var x with module's property x
  var boundGetX = retrieveX.bind(module);
  boundGetX(); // 81

})();
