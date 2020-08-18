/*  Write a program which will give you all of the potential combinations of a two-digit
    decimal combination, printed in a comma-delimited format
    ‘00’, ‘01’, ‘02’, …, ‘98’, ‘99’.
*/

const arr = [];

for (let i = 0; i < 100; i++) {
  i < 10 ? (i = "0" + i) : (i += "");

  arr.push(i);
}

