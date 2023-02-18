export enum AnimalType {
  Dog,
  Cat
}

export abstract class Animal {
  public abstract readonly type: AnimalType;

  abstract makeSound(): void;

  abstract move(distance: number): void;
}
