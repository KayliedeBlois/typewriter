let sentence = "hello there from lighthouse labs";
sentence += "\n";
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time)
  time += 50;
};