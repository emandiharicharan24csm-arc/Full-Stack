// Assignment 1: Implement Inheritance Types using JavaScript

// 1. SINGLE INHERITANCE
class Animal {
    eat() {
        console.log("Animal can eat");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog can bark");
    }
}

console.log("1. Single Inheritance");
let dog = new Dog();
dog.eat();
dog.bark();


// 2. MULTILEVEL INHERITANCE
class Grandparent {
    house() {
        console.log("Grandparent has a house");
    }
}

class Parent extends Grandparent {
    car() {
        console.log("Parent has a car");
    }
}

class Child extends Parent {
    bike() {
        console.log("Child has a bike");
    }
}

console.log("\n2. Multilevel Inheritance");
let child = new Child();
child.house();
child.car();
child.bike();


// 3. HIERARCHICAL INHERITANCE
class Person {
    walk() {
        console.log("Person can walk");
    }
}

class Student extends Person {
    study() {
        console.log("Student can study");
    }
}

class Teacher extends Person {
    teach() {
        console.log("Teacher can teach");
    }
}

console.log("\n3. Hierarchical Inheritance");

let student = new Student();
student.walk();
student.study();

let teacher = new Teacher();
teacher.walk();
teacher.teach();


// 4. MULTIPLE INHERITANCE USING MIXINS
const Swimming = {
    swim() {
        console.log("Can swim");
    }
};

const Flying = {
    fly() {
        console.log("Can fly");
    }
};

class Bird {
    eat() {
        console.log("Bird can eat");
    }
}

Object.assign(Bird.prototype, Swimming, Flying);

console.log("\n4. Multiple Inheritance");
let bird = new Bird();
bird.eat();
bird.swim();
bird.fly();


// 5. HYBRID INHERITANCE
class Vehicle {
    start() {
        console.log("Vehicle can start");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car can drive");
    }
}

class ElectricCar extends Car {
    charge() {
        console.log("Electric car can charge");
    }
}

console.log("\n5. Hybrid Inheritance");
let electricCar = new ElectricCar();
electricCar.start();
electricCar.drive();
electricCar.charge();