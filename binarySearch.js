const nums = [-1, 0, 3, 5, 9, 12];

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

let result;

// recursive method
function recursiveBinarySearch(nums, start, end, target) {
  // base condition
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return recursiveBinarySearch(nums, mid + 1, end, target);
  } else if (nums[mid] > target) {
    return recursiveBinarySearch(nums, start, mid - 1, target);
  }
}

result = recursiveBinarySearch(nums, 0, nums.length - 1, 9);
