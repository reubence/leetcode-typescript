/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] < nums2[p2]) {
      nums1[p] = nums2[p2];
      p2--;
    } else {
      nums1[p] = nums1[p1];
      p1--;
    }
    p--;
  }

  // If there are elements left in nums2
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}

// Test Case 1
const nums1_1 = [1, 2, 3, 0, 0, 0];
const m1 = 3;
const nums2_1 = [2, 5, 6];
const n1 = 3;
merge(nums1_1, m1, nums2_1, n1);
console.log(nums1_1); // Output should be [1, 2, 2, 3, 5, 6]

// Test Case 2
const nums1_2 = [1];
const m2 = 1;
const nums2_2: [] = [];
const n2 = 0;
merge(nums1_2, m2, nums2_2, n2);
console.log(nums1_2); // Output should be [1]

// Test Case 3
const nums1_3 = [2, 0];
const m3 = 1;
const nums2_3 = [1];
const n3 = 1;
merge(nums1_3, m3, nums2_3, n3);
console.log(nums1_3); // Output should be [1, 2]

// Test Case 4
const nums1_4 = [0];
const m4 = 0;
const nums2_4 = [1];
const n4 = 1;
merge(nums1_4, m4, nums2_4, n4);
console.log(nums1_4); // Output should be [1]

// Test Case 5
const nums1_5 = [-1, 0, 1, 0, 0, 0];
const m5 = 3;
const nums2_5 = [-2, 2, 3];
const n5 = 3;
merge(nums1_5, m5, nums2_5, n5);
console.log(nums1_5); // Output should be [-2, -1, 0, 1, 2, 3]
