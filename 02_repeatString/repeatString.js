const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }

  let repeatedString = "";
  let i = 0;
  while (i < num) {
    repeatedString += string;
    i++;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
