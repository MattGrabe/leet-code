const jewels = "aA";
const stones = "aAAbbbb";

var numJewelsInStones = function (jewels, stones) {
  const map = [...jewels];
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (map.includes(stones[i])) {
      count += 1;
    }
  }
  return count;
};

console.log(numJewelsInStones(jewels, stones));
