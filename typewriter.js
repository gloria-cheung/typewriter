const typeWriter = function(str) {
  let x = 0;
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, x);
    x += 50;
  }
  // so that next prompt appears on new line
  // needs to be wrapped inside setTimeout otherwise will run before the typewriter portion finishes
  setTimeout(() => {
    process.stdout.write("\n");
  }, x);
};

//calling typerwriter function:
const sentence = "hello there from camp grenada";
typeWriter(sentence);