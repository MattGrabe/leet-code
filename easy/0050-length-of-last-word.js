const s = "Hello World";

var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

console.log(lengthOfLastWord(s));
