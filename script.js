class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  meow() {
    return "Meow!!";
  }
}

class Dog extends Pet {
  bark() {
    return "Woof!!";
  }
}
