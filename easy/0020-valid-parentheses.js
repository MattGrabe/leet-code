const s = "()";

var isValid = function (s) {
  const stack = [];
  for (i = 0; i < s.length; i++) {
    if (
      (s[i] === ")" && stack[stack.length - 1] === "(") ||
      (s[i] === "]" && stack[stack.length - 1] === "[") ||
      (s[i] === "}" && stack[stack.length - 1] === "{")
    )
      stack.pop();
    else stack.push(s[i]);
  }
  return stack.length === 0;
};

console.log(isValid(s));
