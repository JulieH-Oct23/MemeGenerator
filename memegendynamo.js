// funtion to delete when click
// function to submit content
// form box clears after submission
// validation form complete
let idCounter = 0;

function generateMeme(formEvent) {
   formEvent.preventDefault();
   const imgUrl = formEvent.target.elements['imgUrl'].value;
   const topText = formEvent.target.elements['topText'].value;
   const bottomText = formEvent.target.elements['bottomText'].value;
   idCounter++;
   const newId = idCounter + 'meme';
   const myDiv = getMemeElement(newId, imgUrl, topText, bottomText);
   document.getElementById('meme-container').appendChild(myDiv);
   clearForm();
}

function deleteMeme(deleteId){
    const memeToDelete = document.getElementById(deleteId);
    memeToDelete.remove();
}

function clearForm() {
   document.getElementById('imgUrl').value = '';
   document.getElementById('topText').value = '';
   document.getElementById('bottomText').value = '';
}

function getMemeElement(newId, imgUrl, topText, bottomText) {
   const myDiv = document.createElement('div');
   myDiv.classList.add('meme-holder');
   myDiv.id = newId;
   myDiv.innerHTML = `<img class="meme-image" src="${imgUrl}" alt="yorkie dog" />
   <div class="top-text-generator">${topText}</div>
   <div class="bottom-text-generator">${bottomText}</div>
   <div class="meme-cover" onclick="return deleteMeme('${newId}')">X</div>`
   return myDiv;
}



