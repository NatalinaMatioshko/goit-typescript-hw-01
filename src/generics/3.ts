function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: "Ronald" }, { age: 18 });
console.log(mergedObject);
