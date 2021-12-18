const magnitude = (nums) => {
  if (!nums || nums.length === 0) return 0;
  return Math.sqrt(
    nums
      .map((num) => num * num)
      .reduce((previousValue, currentValue) => previousValue + currentValue)
  );
};

console.log(magnitude([2, 3, 6, 1, 8]));
