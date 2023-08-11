import { randomNum } from "@yarn-workspace/package-a";

export const createRandomNumberArray = (length = 1) => {
  const array = [];

  for (let i = 0; i < length; i++) {
    array.push(randomNum());
  }

  return array;
};
