export { add } from "./add";
export { subtract } from "./subtract";

const arr = [1, 2, 3];
const arrMap = arr.map((i) => ({ id: i, name: `name${i}` }));
console.log("arrMap", arrMap);
