export const changeParagraph = () => {
  const paragraph = document.getElementById('magic-p');
  if(paragraph.textContent === "Hello everybody, I'm just a little paragraph..." || paragraph.textContent === "Wait, I'm not goated anymore..."){
    paragraph.textContent = "I AM THE MAGIC GOATED PARAGRAAAAAPH";    
  } else {
    paragraph.textContent = "Wait, I'm not goated anymore...";
  }  
  
};

export const addToList = () => {
  const inputField = document.querySelector("input");
  const ul = document.querySelector("ul");
  const value = inputField.value.trim();
  if(value !== ""){
    const li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
    inputField.value = "";
  }
}

const changeStyle = () => {
  
}

document.addEventListener('DOMContentLoaded', () =>{
  const magicButton = document.querySelector("#magic-button");
  magicButton.addEventListener('click', changeParagraph);

  const listButton = document.querySelector("#list-button");
  listButton.addEventListener('click', addToList);

  const enterInput = document.querySelector("input");
  enterInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
      addToList();
    }
  })

  const styleButton = document.querySelector("#style-button");
  styleButton.addEventListener('click',)
})