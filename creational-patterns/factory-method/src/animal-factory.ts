import {Animal, AnimalType} from './animal';
import {Dog} from './dog';
import {Cat} from './cat';


export class AnimalFactory {
  bread(type: AnimalType): Animal {
    switch (type) {
      case AnimalType.Dog:
        return new Dog();
      case AnimalType.Cat:
        return new Cat();
      default:
        throw new Error('Unknown animal type');
    }
  }
}
