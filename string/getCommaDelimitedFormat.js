const arr = [];

for (let i = 0; i < 100; i++) {
  i < 10 ? (i = "0" + i) : (i += "");

  arr.push(i);
}