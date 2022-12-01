function findPivotIndex(nums) {
  let leftSum = 0;
  let totalSum = nums.reduce((acc, current) => acc + current);

  for (let i = 0; i < nums.length; i++) {
    if (leftSum == totalSum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }

  return -1;
}
