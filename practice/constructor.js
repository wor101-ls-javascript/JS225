// function Character(name, alignment) {
//   this.name = name;
//   this.alignment = alignment;
// }

// Character.prototype.description = function() {
//   return this.name + 'is a' + this.alignment;
// };

// function CharClass(name, alignment, className, level) {
//   Character.call(this, name, alignment);
//   this.className = className;
//   this.level = level;
// }

// CharClass.prototype.classDescription = function() {
//   return this.description() + ' level ' + this.level + ' ' + this.className; 
// };

// function SubClass(name, alignment, className, level, subClassName) {
//   CharClass.call(this, name, alignment, className, level);
//   this.subClassName = subClassName
// }

// SubClass.prototype.subClassDescription = function() {
//   return /*this.classDescription()  + */' of ' + this.subClassName;
// };

// let theon = new SubClass('Theon', 'Neutral', 'Bard', 12, 'College of Swords');

// console.log(theon);

// console.log(theon.subClassDescription());
// console.log(SubClass.prototype.isPrototypeOf(theon));
// console.log(CharClass.prototype.isPrototypeOf(SubClass));
// console.log(SubClass.__proto__);

function Brick() {
  this.width = 10;
  this.height = 20;
}

function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}

Brick.prototype.throw = function() {
  console.log('You throw the brickt the window!');
}

BlueGlassBrick.prototype = Object.create(Brick.prototype);
let blueBrick = new BlueGlassBrick();
console.log(blueBrick.width);
console.log(BlueGlassBrick.prototype.isPrototypeOf(blueBrick));
console.log(Brick.prototype.isPrototypeOf(BlueGlassBrick));
console.log(blueBrick.constructor);
console.log('');

blueBrick.throw();
console.log(BlueGlassBrick.constructor);
BlueGlassBrick.constructor = Brick;
console.log(BlueGlassBrick.constructor);
console.log(BlueGlassBrick.__proto__ === Function.prototype);