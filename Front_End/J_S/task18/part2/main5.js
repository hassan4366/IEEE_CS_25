const start = performance.now();

for (let i = 1; i <= 99999; i++) {
  console.log(i);
}

const end = performance.now();

const duration = Math.floor(end - start);

console.log(`Loop Took ${duration} Milliseconds.`);
