module.exports = function toReadable (number) {
  let numSpisok = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    1119: {
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen"
    },
    2020: {
      0: "",
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty",
      6: "sixty",
      7: "seventy",
      8: "eighty",
      9: "ninety"
    },
    100: "hundred"
  };
  let num = number + "";
  let newarray = [];
  switch (num.length) {
    case 3:
      newarray.push(numSpisok[num[0]], numSpisok[100]);
      num = (num % 100) + "";
      if (num == 0) break;
  
    case 2:
      if (num > 10) {
        if (num[0] == 1) {
          newarray.push(numSpisok[1119][num]);
          break;
        }
        newarray.push(numSpisok[2020][num[0]]);
        num = (num % 10) + "";
        if (num == 0) break;
      }
  
    case 1:
      newarray.push(numSpisok[num]);
  }
  return newarray.join(" ");
}
