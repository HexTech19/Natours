// // const btn = document.querySelector('.button');
// // const moveX = (element, amount, delay) => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       const bodyBoundary  = document.body.clientWidth;
// //       const elRight = element.getBoundingClientRect().right;
// //       const currLeft = element.getBoundingClientRect().left;

// //       if (elRight + amount > bodyBoundary) {
// //         reject();
// //       } else {
// //         element.style.transform = `translateX(${currLeft + amount}px)`;
// //         resolve();
// //       }
// //     },delay);
// //   });
// // };

// // moveX(btn, 100, 1000)
// //  .then(() => moveX(btn, 100, 1000))
// //  .then(() => moveX(btn, 100, 1000))
// //  .then(() => moveX(btn, 100, 1000))
// //  .then(() => moveX(btn, 100, 1000))
// //  .then(() => moveX(btn, 100, 1000))
// //  .then(() => moveX(btn, 100, 1000))
// //  .then(() => moveX(btn, 100, 1000))
// //  .catch(() => {
// //   console.log('no space');
// //  })


// //Recursive
// const multiples = (num = 0) => {
//   if (num > 999) return;
   
//    if(num > 99){
//        num += 100; 
//    } 
//    else {
//        num += 10;
//    }
//    console.log(num);
//    multiples(num);
// };

// //function
// function multiples10() {
//    for (let i = 0; i < 900; i += 10 ) {
//     if(i > 100){
//       i += 100; 
//   } 
//    console.log(i)
// }
// };



