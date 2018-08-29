// Commands:
//  test - hello

export default async robot => {
  robot.respond(/test/, res => {
    res.send("hello");
  });
};
