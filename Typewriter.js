const sentence = "hello there from lighthouse labs";

let delay = 0;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, delay)
  delay += 50;
}
// process.stdout.write('\n');
setTimeout(() => {
  console.log('')
}, delay);