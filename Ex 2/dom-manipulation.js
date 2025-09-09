export const changeParagraph = () => {
  const paragraph = document.getElementById('magic-p');
  console.log(paragraph);
  if(paragraph.textContent === "Hello everybody, I'm just a little paragraph..." || paragraph.textContent === "Wait, I'm not goated anymore..."){
    paragraph.textContent = "I AM THE MAGIC GOATED PARAGRAAAAAPH";    
  } else {
    paragraph.textContent = "Wait, I'm not goated anymore...";
  }  
  
};

document.addEventListener('DOMContentLoaded', () =>{
  const button = document.querySelector("button");
  button.addEventListener('click', changeParagraph);
})