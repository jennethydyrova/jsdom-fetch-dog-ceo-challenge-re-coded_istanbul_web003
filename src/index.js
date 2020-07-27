document.addEventListener('DOMContentLoaded', function(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(imagesUrl => outputImages(imagesUrl.message))

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(breed => printBreed(breed.message));


})

// function outputImages(arr) {
//     for(let i=0; i < arr.length; i++) {
//        const imageContainer = document.querySelector('#dog-image-container')
//        const image = document.createElement('img');
//        image.src = arr[i];
//        image.style.width = '100px';
//        imageContainer.appendChild(image)
//     }
// }

function outputImages(arr) {
    arr.forEach((el) => {
        const imageContainer = document.querySelector('#dog-image-container')
        const image = document.createElement('img');
        image.src = el;
        image.style.width = '100px';
        imageContainer.appendChild(image) 
    }) 


}

function printBreed(obj) {
    console.log(obj)
    for(const key in obj) {
        const list = document.createElement('li');
        list.innerText = key;
        const ulBreed =  document.getElementById("dog-breeds");
        ulBreed.appendChild(list);
        list.addEventListener('click', function(){
            list.style.color = 'red';
        })
    }
    const dropdownMenu = document.querySelector('#breed-dropdown');

    dropdownMenu.addEventListener('change', event => { 
        const letter = event.target.value;
        filteringBreed(obj,letter)
      
        })
    
}

function showBreeds(el) {
    return el.map(function(b) {
    return `<li>${b}</li>`;
    }).join('')
  }

function filteringBreed(breed,letter){
    console.log(breed)
    let newBreed = [];
    Object.keys(breed).forEach((el) => {
        newBreed.push(el)
    });
    const filteredBreeds = newBreed.filter(el => {return el.charAt(0) === letter
    });
    const ulBreed =  document.getElementById("dog-breeds");
    ulBreed.innerHTML = showBreeds(filteredBreeds);
}
  
