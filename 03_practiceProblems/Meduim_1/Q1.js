const STR = "The Flintstones Rock!";

let i = 1;
while (i <= 10) {
  console.log(`${STR.padStart(STR.length + i)}\n`);
  i++;
}

