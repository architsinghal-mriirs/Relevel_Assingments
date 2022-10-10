//promise.all will resolve ALL the async operastions
const promise1 = Promise.resolve(3);
const promise2 = 22;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}); // all will resolve




// Promise.race will return the first settles promise either resolved or rejected.
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two'); // this is the first one to resolve
  });
  Promise.race([promise4, promise5]).then((value) => {
    console.log(value);
  
  });
