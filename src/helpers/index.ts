import { Ways } from '../enum';

export function randomInteger(min: number, max: number): number {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export const generateGame = (cols: number, steps: number) => {
  const stepsResult = [];
  const startItemId = randomInteger(0, cols ** 2 - 1);
  let answer = startItemId;
  for (let index = 0; index < steps; index++) {
    const step = randomInteger(1, 4);
    switch (step) {
      case Ways.TOP:
        if (answer - cols >= 0) {
          stepsResult.push(step);
          answer -= cols;
        } else {
          index--;
        }

        break;
      case Ways.RIGHT:
        if ((answer + 1) % cols !== 0 && answer + 1 < cols ** 2) {
          stepsResult.push(step);
          answer++;
        } else {
          index--;
        }
        break;
      case Ways.BOTTOM:
        if (answer + cols < cols ** 2) {
          stepsResult.push(step);
          answer += cols;
        } else {
          index--;
        }
        break;
      case Ways.LEFT:
        if (answer % cols !== 0 && answer - 1 >= 0) {
          stepsResult.push(step);
          answer--;
        } else {
          index--;
        }
        break;
      default:
        break;
    }
  }
  return {
    answer,
    startItemId,
    stepsResult,
  };
};
