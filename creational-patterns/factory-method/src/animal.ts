export enum AnimalType {
  Dog = 'Dog',
  Cat = 'Cat',
}

/**
 * @abstract
 * @description
 * Abstract class for all animals.
 *
 * This class is abstract because we don't want to create an instance of it directly, but only through its subclasses. While allowing check using instanceof operator to work as expected.
 */
export abstract class Animal {
  public abstract readonly type: AnimalType;

  abstract makeSound(): void;

  abstract move(distance: number): void;
}
