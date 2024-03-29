# This repository contains all of my LeetCode solutions

The problems are selected based on LeetCode 75.

# Level 1

## _Day 1_

_1. Problem: Running Sum of 1d Array_

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

```
Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

```
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

```
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
```

_2. Problem: Find Pivot Index_

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Example 1:

```
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
```

```
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
```

```
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
```

## Problem: Merge Two Sorted Lists

You are given the heads of two sorted (non-decreasing) linked lists `list1` and `list2`
Merge the two lists into one _sorted_ list. The list should be made by splicing together of the first two lists.

Return the head of the merged linked lists

Example 1:
Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
Output: [1, 1, 2, 3, 4, 4]

# Algorithm Problems

## Problem 1: Binary Search

Given an array of integer `nums` which is sorted in ascending order, and an integer `target`,
write a function to search `target` in `nums`. If target exists, then return its index.
Otherwise, return -1.

You must write an algorithm in `O(log n)` runtime complexity.

Example 1:

Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4

Example 2:
Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
Output: -1

provide two solutions: iterative and recursive

Explanation of algo: [Binary Search](https://cs50.harvard.edu/x/2023/shorts/binary_search/)
Additional explanation: [Binary Search Leet Code](https://leetcode.com/explore/learn/card/binary-search/)

## Problem 2: First Bad Version

You are a product manager and currently leading a team to develop a new product.
Unfortunately, the latest version of your product fails the quality check.
Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad.
Implement a function to find the first bad version. You should minimize the number of calls to the API.
