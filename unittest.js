function stringLength(string) {
  if (string.length < 1 && string.length >= 10) {
    throw new Error ("please enter a string of length 1 to 10 ")
  }
  return string.length;
}


module.exports = stringLength;


