import {Animal, AnimalType} from './animal';

export class Cat implements Animal {
  readonly type: AnimalType = AnimalType.Cat;

  makeSound(): void {
    console.log('Meow!');
  }

  move(distance: number): void {
    console.log(`Cat moved ${distance} meters`);
  }

  eat(food: string): void {
    console.log(`Cat ate a ${food}!`);
  }
}
