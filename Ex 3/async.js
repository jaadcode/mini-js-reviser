//I'll try to create a countDown with setTimeOut()
/*setTimeout(()=>{
  console.log('That function took approximately 3 sec to execute')
}, 3000); */


const startCountDown = (i) => {
  if(i < 0){
    console.log('Count Down FINISHED');
    return;
  }
  console.log(i);
  setTimeout((() => startCountDown(i - 1)), 500);
}

startCountDown(10);

