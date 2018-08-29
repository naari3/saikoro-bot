// Commands:
//  test - hello

export default async robot => {
  robot.respond(/test/, res => {
    console.log(res);
    res.send("hello");
  });
};
