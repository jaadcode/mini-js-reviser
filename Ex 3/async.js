//I'll try to create a countDown with setTimeOut()
/*setTimeout(()=>{
  console.log('That function took approximately 3 sec to execute')
}, 3000); */

let i = 10;

const myCounter = setInterval(() =>{
  if(i === 0){
    clearInterval(myCounter);
  }
  console.log(i);
  i--;
}, 1000);

console.log('I executed first');

