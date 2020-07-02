const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Vishwajeet",
      age: 44,
      dead: false,
    });
    reject("something went wrong");
  }, 1500);
});

console.log("before");
// Promise Chaning
promise
  .then(({ name, age, dead }) => {
    console.log(name, dead, age);
    return 456;
  })
  .then((data) => {
    console.log("The data returned by previous promise is :", data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("after");
