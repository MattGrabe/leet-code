const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

var maximumWealth = function (accounts) {
  let total = 0;
  const wealth = [];
  for (customer of accounts) {
    for (amount of customer) {
      total += amount;
    }
    wealth.push(total);
    total = 0;
  }
  return Math.max(...wealth);
};

console.log(maximumWealth(accounts));
