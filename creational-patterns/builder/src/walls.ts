export enum CardinalDirection {
  NORTH = 'north',
  SOUTH = 'south',
  EAST = 'east',
  WEST = 'west',
}

export enum WallMaterial {
  BRICK = 'brick',
  WOOD = 'wood',
  STONE = 'stone',
}

export enum InsulationType {
  NONE = 'none',
  FOAM = 'foam',
  FIBERGLASS = 'fiberglass',
}

export enum PaintColor {
  NONE = 'none',
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
  BLACK = 'black',
  WHITE = 'white',
}

export class Wall {
  thickness: number = 1;

  constructor(public x: number,
              public y: number,
              public length: number,
              public wallFacingDirection: CardinalDirection,
              public material: WallMaterial = WallMaterial.BRICK,
              public insulation: InsulationType = InsulationType.NONE,
              public colour: PaintColor = PaintColor.NONE) {
  }

  isInsulated() {
    return this.insulation !== InsulationType.NONE;
  }

  isPainted() {
    return this.colour !== PaintColor.NONE;
  }

  private getMaterialCharacter(): string {
    switch (this.material) {
      case WallMaterial.BRICK:
        return '\u2588';
      case WallMaterial.STONE:
        return '\u2593';
      case WallMaterial.WOOD:
        return '\u2591';
    }
  }

  draw(world: string[][]): void {
    if ([CardinalDirection.NORTH, CardinalDirection.SOUTH].includes(this.wallFacingDirection)) {
      for (let i = 0; i < this.length; i++) {
        world[this.y][this.x + i] = this.getMaterialCharacter();
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        world[this.y + i][this.x] = this.getMaterialCharacter();
      }
    }
  }
}
