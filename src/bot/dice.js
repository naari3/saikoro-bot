// Commands:
//  1d100 - 1

export default async robot => {
  robot.hear(new RegExp("(\\d+)d(\\d+)"), res => {
    res.send(`${dice(parseInt(res.match[1]), parseInt(res.match[2]))}`);
  });
};

const dice = (a, b) => {
  return [...Array(a)]
    .map(() => Math.floor(Math.random() * b + 1))
    .reduce((a, x) => (a += x));
};
