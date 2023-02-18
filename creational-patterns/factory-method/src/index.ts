import {Dog} from './dog';
import {Cat} from './cat';
import {AnimalFactory} from './animal-factory';
import {AnimalType} from './animal';

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

const animalType = Math.random() > 0.5 ? AnimalType.Dog : AnimalType.Cat; // This value can be retrieved from anywhere, e.g. user input, config file, database, etc.
const factory = new AnimalFactory();
const animal = factory.bread(animalType);
animal.makeSound();
animal.move(10);

