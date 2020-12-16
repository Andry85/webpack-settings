{

  function say() {
    console.log('HI');
  }
  say();
   
}

// spred operator

const numArr = [1,5,7]

function spreadFunc(x, y, z) {
  console.log(x + y + z);
}
spreadFunc(...numArr);

const bigData = [...numArr, 'A', 'B', 'C'];

console.log('bigData: ', bigData);

let Person = {
  name: "Peter",
  fullName: "Odarenko",
  age: 22,
  power: '100%'
}

let PersonClone = {
    ...Person,
    age: 46
  };

console.log('PersonClone: ', PersonClone);


// rest operator
var log = function(a, b, ...rest) {
  console.log(a, b, rest);
};

log('Basic', 'rest', 'operator', 'usage'); // Basic rest ['operator', usage]



// this
export function thisFunc() {
  console.log('this', this);
}
thisFunc();

const thisFuncEs6 = () => {
  console.log(this);
}
thisFuncEs6();

//default arguments
var w = 1; 
var z = 2;



function defaultArguments(x = w + 1, y = x + 1, z = z + 1) {
  console.log(x,y,z);
}

defaultArguments();


console.log(typeof null);
console.log('B', 'B'.charCodeAt(0));
console.log('A', 'A'.charCodeAt(0));
console.log('A' > 'B'); 


//Destructuring assignment
function box() {
  return [5,6,7]
}

var [num_1, num_2, num_3] = box();

console.log(num_1, num_2, num_3);

const car = {
  wheels: 4,
  lams: 2,
  seets: 4
}

var {wheels: x, lams: y, seets: z} = car;

console.log(x, y, z);

var {
  a: {z: X}, 
  a: Y
} = {a: { z: 1}}

console.log(X);
console.log(Y);


function geEl({x = 10} = {}, {y} = {y: 10}) {
  console.log(x, y)
}

geEl({x: 4}, {});

// мы передаём объект в функцию
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...и она немедленно извлекает свойства в переменные
function showMenu({
  title = "Untitled",
  width = 200, 
  height = 100, 
  items = []
}) {
  // title, items – взято из options,
  // width, height – используются значения по умолчанию
  console.log( `${title} ${width} ${height}` ); // My Menu 200 100
  console.log( items ); // Item1, Item2
}

showMenu(options);

let team = ['shevchenko', 'rebrow' , 'gusin', 'shovkowski'];


let [pl_1, pl_2, ...oldPlayers] = team;

console.log('pl_1: ', pl_1);
console.log('pl_2: ', pl_2);
console.log('oldPlayers: ', oldPlayers);

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary() {

}

topSalary(salaries);

function isLucky(n) {
  let str = n.toString();

  let res = str.split("");

  let half = res.length/2;

  let firstPart = 0;

  for (let i = 0; i < half; i++) {
      firstPart = firstPart + (+res[i]);
  }

  console.log('firstPart', firstPart);

  let secondPart = 0;

  for (let i = half; i < res.length; i++) {
    secondPart = secondPart + (+res[i]);
  }

  console.log('secondPart', secondPart);

  console.log(half);

  if (firstPart === secondPart) {
    return true;
  } else {
    return false;
  }
  
}

isLucky(1230);

let obj = {
  one: 1,
  two: 2,
  b: { 
    c: 'c',
    d: 'd',
  },
  say: function() {
    alert('say');
  }
}

let newObj = { ...obj };

console.log(newObj);


// short suntatix
const Home = {
  windows: 4,
  doors: 2,
  openDor() {
    console.log(this.doors);
  },
  closeWindow: function() {
    console.log('closed:', this.windows);
  },
  closeDoors: function closeDoors() {
    console.log('closed doors:', this.doors);
  },

}

Home.openDor();
Home.closeWindow();
Home.closeDoors();

// let btn = document.getElementById('btn');
// btn.addEventListener("click", Home.closeDoors, false);


const actors = ['Anjelina', 'Doter', 'Mark', 'Penelopa'];

for (let item of actors) {
  console.log(item);
}


let str = "09:00";
let regexp = /\b\d\d:\d\d\b/g;

console.log(str.match(regexp));

console.log("Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g));

let id = Symbol("id");

console.log(id);
console.log(id.toString());
console.log(id.description);

let idd = Symbol("id");

let idGlobal = Symbol.for("id");
let idGlobalClone = Symbol.for("id");


console.log('idGlobal === idGlobalClone', idGlobal === idGlobalClone);

let user = {
  name: "Вася",
  [idd]: 123 // просто "id: 123" не сработает
};

console.log(user[idd]);

for (let key in user) {
  console.log('key:', key);
}

// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id


let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
console.log( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа

console.log(localSymbol.description); // name

const Obb = {
  weight: 10,
  height: 20,
  price: "20UAH"
}

console.log( Number(Obb) );

let admin = {
  name: "John",
  money: 1000,

  // для хинта равного "string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // для хинта равного "number" или "default"
  valueOf() {
    return this.money;
  }

};

console.log(admin); // toString -> {name: "John"}
console.log(+admin); // valueOf -> 1000
console.log(admin + 500); // valueOf -> 1500


let func;

if (true) {
  let num = 0;

  func = function() {
    return ++num;
  }
}

console.log(func());
console.log(func());
console.log(func());

// iterators

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

// теперь работает!
for (let num of range) {
  console.log(num); // 1, затем 2, 3, 4, 5
}

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (метод работает)



let arrr = Array.from(range, num => num * num);

console.log(arrr); // 1,4,9,16,25




let rangeGenerator = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

console.log( [...rangeGenerator] ); // 1,2,3,4,5


// generate password
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let strr = '';

for(let code of generatePasswordCodes()) {
  strr += String.fromCharCode(code);
}

console.log(strr); // 0..9A..Za..z

let acyncrange = {
  from: 1,
  to: 5,

  // for await..of вызывает этот метод один раз в самом начале
  [Symbol.asyncIterator]() { // (1)
    // ...возвращает объект-итератор:
    // далее for await..of работает только с этим объектом,
    // запрашивая у него следующие значения вызовом next()
    return {
      current: this.from,
      last: this.to,

      // next() вызывается на каждой итерации цикла for await..of
      async next() { // (2)
        // должен возвращать значение как объект {done:.., value :...}
        // (автоматически оборачивается в промис с помощью async)

        // можно использовать await внутри для асинхронности:
        await new Promise(resolve => setTimeout(resolve, 1000)); // (3)

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

(async () => {

  for await (let value of acyncrange) { // (4)
    console.log(value); // 1,2,3,4,5
  }

})()

//modules
import greating, {admini} from './modules/greating.js';
greating('Peter');
admini.name = "Oleg";
console.log(admini.name);

import {doors, todo} from './modules/room.js';

doors.map(function(door, index) {
  console.log(todo('Open', door));
});


import * as date from './modules/flat.js';



console.log(date.badroom);
console.log(date.goToBad());


import {default as General, mi,em, oil} from './modules/country.js';

console.log('milk: ', mi);
console.log('General: ', General);

export {em} from './modules/country.js';


if (true) {

  async function load() {
    let {hi, bye} = await import('./modules/dynamicModule.js');

    hi();
    bye();
  }

  load();

  

}


class Beer {
  constructor(brand, mount) {
    this.brand = brand;
    this.mount = mount;
  }

  drink(liters) {
    this.mount = this.mount - liters;
  }

}

let collBeer = new Beer("Obolon", 5);

console.log('collBeer', collBeer);


collBeer.drink(2);

console.log('collBeer after dringing', collBeer);

console.log(typeof Beer);


const simpleObg = {
  a: 1,
  b: 2
}

console.log('Beer.prototype', Beer.prototype);

function UserClass(name) {
  this.name = name;
}
UserClass.prototype.sayHi = function() {
  console.log(this.name);
};

let userMy = new UserClass("Иван");
userMy.sayHi();

console.log('UserClass.prototype', UserClass.prototype);

class Box {
  constructor(width, height, position) {
    this.width = width;
    this.height = height;
    this.position = position;
  }
  open(w,h) {
    this.width = w;
    this.height = h;
  }
  close() {
    this.width = 0;
    this.height = 0;
  }

}

class Accardion extends Box {

  constructor(width, height) {
    super(width, height);
    this.width = width + 2;
    this.height = height + 2;
  }

  hide() {
    this.opacity = 0;
    console.log(`My width is ${this.width}, my height is ${this.height}. But I am hidden`);
  }
}

let newAccardion = new Accardion(100, 200, 'fixed');
newAccardion.hide();


let animal = {
  name: "Animal",
  eat() {
    console.log(`${this.name} ест.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "Кролик",
  eat() {
    // вот как предположительно может работать super.eat()
    this.__proto__.eat.call(this); // (*)
  }
};

rabbit.eat();


class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static publisher = "Илья Кантор";

  static createTodays() {
    // помним, что this = Article
    return new this("Сегодняшний дайджест", new Date());
  }
}

let article = Article.createTodays();

console.log( article.title ); // Сегодняшний дайджест
console.log( article.date );
console.log( Article.publisher );


class CoffeeMachine {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательный уровень воды");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
console.log(machine.waterAmount); // Error


class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    console.log( this.waterAmount ); // Error: can only access from CoffeeMachine
  }
}

let machineMega = new MegaCoffeeMachine();
machineMega.method();


class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arrrr = new PowerArray(1, 2, 5, 10, 50);
console.log(arrrr.isEmpty()); // false

let filteredArr = arrrr.filter(item => item >= 10);
console.log(filteredArr); // 10, 50
console.log(filteredArr.isEmpty()); // false

// примесь
let sayHiMixin = {
  sayHi() {
    console.log(`Привет, ${this.name}`);
  },
  sayBye() {
    console.log(`Пока, ${this.name}`);
  }
};

// использование:
class User {
  constructor(name) {
    this.name = name;
  }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася!


function Cars(brand) {
  this.brand = brand;
}

console.log('Cars', Cars);
console.log('Cars.prototype', Cars.prototype);
console.log('Cars.prototype.constructor', Cars.prototype.constructor);


//Map Set
let map = new Map();

map.set('1', 'str1');
map.set(1, "num1");
map.set(true, "bool");

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size);


let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
  console.log(entry); // огурец,500 (и так далее)
}

recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // огурец: 500 и так далее
});

let map1 = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);



console.log( map1.get('1') ); // str1

let objMap = {
  name: "John",
  age: 30
};

let mapNew = new Map(Object.entries(objMap));

console.log( mapNew );


//Set

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // John (потом Pete и Mary)
}

let userok = {
  name: "John",
  age: 30
};

// перебор значений
for (let value of Object.values(userok)) {
  console.log(value); // John, затем 30
}

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // преобразовать в массив, затем map, затем fromEntries обратно объект
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices.meat); // 8

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const objee = Object.fromEntries(entries);

console.log(objee);


function Foo() {


}

var barr = new Foo();

console.log('barr', barr instanceof Function);

console.log('-----------------------------------');

localStorage.setItem('test', 1);
localStorage.setItem('foo', 'bomba');

console.log(localStorage.getItem('test'));
console.log(localStorage.getItem('foo'));

console.log('-----------------------------------');

for(let key in localStorage) {
  if (!localStorage.hasOwnProperty(key)) {
    continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
  }
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

console.log('---------------- session -------------------');
sessionStorage.setItem('session', 1);
console.log( sessionStorage.getItem('session') );
console.log('----------------- end session ------------------');


try {
  var someVar = 1;
  console.log(someVar.toString());


} catch(e) {
  console.log('Error');
} finally {
  console.log('Done');
}



const back = document.getElementById('back');

if (back) {
    back.addEventListener('click', function() {
        window.history.back();
    });
}

const forward = document.getElementById('forward');

if (forward) {
    forward.addEventListener('click', function() {
        window.history.forward();
    });
}

let numberOfEntries = window.history.length
console.log(numberOfEntries);


// var Poo = (function() {
//   this.counter = 0;

//   return function() {
//     this.counter++;
//     console.log(this.counter);
//   }

// })();



console.log('-----------------  ------------------');

// var bb = new Poo();
// var zz = new Poo();

// console.log(bb);

function recursion(n) {
  return (n != 1) ? n * recursion(n-1) : 1;
}

console.log(recursion(5));

//proxy
let targetObg = {};
let proxy = new Proxy(targetObg, {})

proxy.name = 'Oleg';

console.log(targetObg.name);
console.log(proxy.name);

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // значение по умолчанию
    }
  }
});

console.log( numbers[2] ); // 1
console.log( numbers[123] ); // 0 (нет такого элемента)

let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) { // перехватываем чтение свойства в dictionary
    if (phrase in target) { // если перевод для фразы есть в словаре
      return target[phrase]; // возвращаем его
    } else {
      // иначе возвращаем непереведённую фразу
      return phrase;
    }
  }
});

// Запросим перевод произвольного выражения в словаре!
// В худшем случае оно не будет переведено
console.log( dictionary['Hello'] ); // Hola
console.log( dictionary['Welcome to Proxy']); // Welcome to Proxy (нет перевода)


let administartor = {
  name: "Вася",
  age: 30,
  _password: "***"
};

administartor = new Proxy(administartor, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

// ownKeys исключил _password
for(let key in administartor) console.log(key); // name, затем: age

// аналогичный эффект для этих методов:
console.log( Object.keys(administartor) ); // name,age
console.log( Object.values(administartor) ); // Вася,30


function reverseInParentheses(inputString) {

  const words = inputString.split('');
  let numberArrows = [];
  let copyWords = inputString.split('');

  console.log(words);

  for (let i = 0; i < words.length; i++) {
    if(words[i] == "(") {
      numberArrows.push(i);
    }
  }

  console.log('numberArrows', numberArrows.length);

  let reversArr = [];

  for (let i = numberArrows[numberArrows.length-1] + 1; i < words.length; i++) {
    console.log( words[i] );
    

    if(words[i] == ")") {
      break;
    }

    reversArr.push(words[i]);

  }

  console.log('reversArr', reversArr.reverse());

  let reversAll = reversArr.reverse();
  let el =  numberArrows[numberArrows.length-1] + 1 + reversArr.length;
  console.log(el);

  for (let i = 0; i < words.length; i++) {
    if(i == numberArrows[numberArrows.length-1] + 1) {
      console.log(i);
      copyWords.slice(numberArrows[numberArrows.length-1] + 1, el, ...reversAll);
    }
  }

  console.log('copyWords', copyWords);




}
reverseInParentheses("foo(bar(baz))blim");
