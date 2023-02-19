import {InsulationType, PaintColor, Wall, CardinalDirection, WallMaterial} from './walls';

export class WallBuilder {
  private x: number = 0;
  private y: number = 0;

  private length?: number;
  private direction?: CardinalDirection;
  private material?: WallMaterial;
  private insulationType?: InsulationType;
  private colour?: PaintColor;


  setX(x: number): WallBuilder {
    this.x = x;
    return this;
  }

  setY(y: number): WallBuilder {
    this.y = y;
    return this;
  }

  setLength(length: number): WallBuilder {
    if (length <= 0) {
      throw new Error('Length must be greater than zero!');
    }

    this.length = length;
    return this;
  }

  setDirection(direction: CardinalDirection): WallBuilder {
    this.direction = direction;
    return this;
  }

  setInsulationType(insulationType: InsulationType): WallBuilder {
    this.insulationType = insulationType;
    return this;
  }

  setColour(colour: PaintColor): WallBuilder {
    this.colour = colour;
    return this;
  }


  build(): Wall {
    if (!this.length) {
      throw new Error('Length is required!');
    }

    if (!this.direction) {
      throw new Error('Direction is required!');
    }

    const wall =  new Wall(
      this.x,
      this.y,
      this.length,
      this.direction,
      this.material,
      this.insulationType,
      this.colour,
    );

    this.reset();

    return wall;
  }

  reset(): void {
    this.x = 0;
    this.y = 0;
    this.length = undefined;
    this.direction = undefined;
    this.material = undefined;
    this.insulationType = undefined;
    this.colour = undefined;
  }
}
