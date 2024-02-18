const spinArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   \n'];

for (let i = 0; i < 8; i++)
  setTimeout(() => {
  process.stdout.write(spinArray[i])}, (100 + 200 * i));
