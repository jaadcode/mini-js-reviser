//I'll try to create a countDown with setTimeOut()
/*setTimeout(()=>{
  console.log('That function took approximately 3 sec to execute')
}, 3000);


const startCountDown = (i) => {
  if(i < 0){
    console.log('Count Down FINISHED');
    return;
  }
  console.log(i);
  setTimeout((() => startCountDown(i - 1)), 500);
}

startCountDown(10);*/

//Convert a Promise to async/await
// Step 1: Promise that sometimes resolves and sometimes rejects
function fetchRandomData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const succeed = Math.random() > 0.5; // 50% chance
      if (succeed) {
        resolve("🎉 Success! Data received.");
      } else {
        reject("❌ Oops! Something went wrong.");
      }
    }, 1000);
  });
}

// Step 2: Usage with .then() (old way)
async function fetchRandomDataAsync() {
  try{
    const data = await fetchRandomData();
    console.log(data);
  } catch(error) {
    console.log(error);
  }
  
}

fetchRandomDataAsync();


function fakeApiCall() {
  // instantly resolved Promise
  return Promise.resolve({ id: 1, name: "Jaad", role: "developer" });
}

// Consume with .then()
fakeApiCall().then((data) => console.log("Then:", data));

// Or consume with async/await
async function run() {
  const data = await fakeApiCall();
  console.log("Async/Await:", data);
}

run(); 