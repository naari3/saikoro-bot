// Commands:
//  1d100 - 1

const BigInt = require("big-integer");

export default async robot => {
  robot.hear(
    new RegExp("(\\d\\.?\\d*(e\\d*)?)d(\\d\\.?\\d*(e\\d*)?)"),
    async res => {
      const diceNum = BigInt(res.match[1]);
      const diceSurfaceNum = BigInt(res.match[3]);
      if ([diceNum, diceSurfaceNum].every(i => BigInt(i).greater(0))) {
        (async () => {
          res.send(`${dice(diceNum, diceSurfaceNum).toString()}`);
        })();
      }
    }
  );
};

const dice = (a, b) => {
  let sum = BigInt(0);
  for (let i = 0; i < a; i++) {
    sum = sum.add(BigInt.randBetween(1, b));
  }
  return sum;
};
