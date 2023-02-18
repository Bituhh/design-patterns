import {Animal, AnimalType} from './animal';

export class Dog implements Animal {

  readonly type: AnimalType = AnimalType.Dog;

  public makeSound(): void {
    console.log('Woof!');
  }

  move(distance: number): void {
    console.log(`Dog moved ${distance} meters`);
  }

  eat(food: string): void {
    console.log(`Dog ate a ${food}!`);
  }
}
