const nums = [2, 7, 11, 15];
const target = 9;

var twoSum = function (nums, target) {
  const index = [];
  for (let i = 0; i < nums.length; i++) {
    if (index[nums[i]] >= 0) {
      return [index[nums[i]], i];
    }
    index[target - nums[i]] = i;
  }
};

console.log(twoSum(nums, target));
