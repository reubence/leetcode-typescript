function removeElement(nums: number[], val: number): number {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
}

// Test Case 1
const nums1 = [3, 2, 2, 3];
const val1 = 3;
const k1 = removeElement(nums1, val1);
console.log(k1); // Output should be 2
console.log(nums1); // Output should be [2, 2, ..., ...]

// Test Case 2
const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;
const k2 = removeElement(nums2, val2);
console.log(k2); // Output should be 5
console.log(nums2); // Output should be [0, 1, 4, 0, 3, ..., ..., ...]

// Test Case 3
const nums3: [] = [];
const val3 = 0;
const k3 = removeElement(nums3, val3);
console.log(k3); // Output should be 0
console.log(nums3); // Output should be []
