// Нужно создать класс Animal и унаследовать от него Cat, Dog.



// Условия:

// Animal должен принимать name и у него есть метод sayName - который выводит "My name is {name}".
// Cat должен иметь метод sayHello - который выводит "Hello from {name}, I am a cat".
// Dog должен иметь метод sayHello - который выводит "Hello from {name}, I am a dog".
// Cat, Dog должны иметь все те же свойства и методы что и Animal.


// Реализовать можно любым способом, функции конструкторы или классы.

class Animal {
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(`My name is ${this.name}`)
    }

}

class Cat extends Animal {
    sayHello(){
        console.log(`Hello from ${this.name}, I'm a cat`)
    }
}

let catThomas = new Cat('Thomas')

class Dog extends Animal {
    sayHello(){
        console.log(`Hello from ${this.name}, I am a dog`)
    }
}

let dogBeethoven = new Dog('Beethoven')