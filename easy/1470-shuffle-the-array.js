const nums = [2, 5, 1, 3, 4, 7];
const n = 3;

var shuffle = function (nums, n) {
  const array = [];
  for (i = 0; i < n; i++) {
    array.push(nums[i]);
    array.push(nums[i + n]);
  }
  return array;
};

console.log(shuffle(nums, n));
