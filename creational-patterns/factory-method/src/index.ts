import {Dog} from './dog';
import {Cat} from './cat';
import {AnimalFactory} from './animal-factory';
import {Animal, AnimalType} from './animal';

/**
 * Creating each animal separately
 */
const dog = new Dog();
dog.makeSound(); // Woof!
dog.move(10); // Dog moved 10 meters

const cat = new Cat();
cat.makeSound(); // Meow!
cat.move(5); // Cat moved 5 meters

console.log('--------------------------');
/**
 * Creating animals using factory method
 */



for (let i = 0; i < 5; i++) {
  const animalType = Math.random() > 0.5 ? AnimalType.Dog : AnimalType.Cat; // This value can be retrieved from anywhere, e.g. user input, config file, database, etc.
  const factory = new AnimalFactory();
  const animal = factory.bread(animalType);
  console.log(`Is an instance of Animal: ${animal instanceof Animal}`);
  console.log(`Is an instance of Cat: ${animal instanceof Cat}`);
  console.log(`Is an instance of Dog: ${animal instanceof Dog}`);
  console.log('Factory created a', animal.type);
  animal.makeSound();
  animal.move(10);
}

