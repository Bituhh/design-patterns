import {WallBuilder} from './wall-builder';
import {CardinalDirection} from './walls';

const world: string[][] = [];
for (let i = 0; i < 10; i++) {
  world[i] = [];
  for (let j = 0; j < 10; j++) {
    world[i][j] = ' ';
  }
}

const wallBuilder = new WallBuilder();
const northWall = wallBuilder.setLength(10)
  .setDirection(CardinalDirection.NORTH)
  .build();
northWall.draw(world);

const eastWall = wallBuilder.setLength(10)
  .setDirection(CardinalDirection.EAST)
  .setX(9)
  .build();
eastWall.draw(world);

const southWall = wallBuilder.setLength(10)
  .setDirection(CardinalDirection.SOUTH)
  .setY(9)
  .build();
southWall.draw(world);

const westWall = wallBuilder.setLength(10)
  .setDirection(CardinalDirection.WEST)
  .build();
westWall.draw(world);


console.log(world.map(row => row.join('')).join('\n'));

