/*
SORT FUNCTION
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.
*/
// arr = [56, 13, 6, 134, 44, 12]
export const numberSortASC = (arr) => {
  return arr.sort((a, b) => a - b);
};
export const numberSortDESC = (arr) => {
  return arr.sort((a, b) => b - a);
};
