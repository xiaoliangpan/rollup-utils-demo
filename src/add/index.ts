export const add = (a: number, b: number) => {
  return a + b;
};
const arr = [1, 2, 3];
const arrMap = arr.map((i) => ({ id: i, name: `name${i}` }));
console.log("arrMap", arrMap);
