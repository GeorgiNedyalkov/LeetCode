const numbers = [5, 2, 1, 3, 6, 4];

function bubbleSort(nums) {
  let swapCounter = -1;

  do {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
      swapCounter++;
    }
  } while (swapCounter === 0);

  return nums;
}

console.log(bubbleSort(numbers));
