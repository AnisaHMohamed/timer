// function sortNumber(a, b) {
//   return a - b;
// }

// const args =  process.argv.slice(2)
// //console.log(args.sort(sortNumber))

// const sortedArgs = args.sort(sortNumber)
// for (let i =0;i<sortedArgs.length;i++){
  
//   setTimeout(() => {process.stdout.write('\x07');

// }, sortedArgs[i]*1000);
// }
// function sortNumber(a, b) {
//   return a - b;
// }

const args =  process.argv.slice(2)
//console.log(args.sort(sortNumber))
function sortNumber(a, b) {
  return a - b;
}
const sortedArgs = args.sort(sortNumber)
for (let i =0;i<sortedArgs.length;i++){
  if (!isNaN(sortedArgs[i]) && sortedArgs[i]>0 ){

  setTimeout(() => {process.stdout.write('\x07');
//console.log(sortedArgs[i])
}, sortedArgs[i]*1000);
}


}