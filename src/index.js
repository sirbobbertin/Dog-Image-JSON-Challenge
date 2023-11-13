console.log('%c HI', 'color: firebrick')



//const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

//let imageContain = document.getElementById("dog-image-container");
//document.addEventListener("onload")
//JSONObject pictures = new JSONObject();
document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let breedsObject;
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            // Access the array of image URLs in the response
            const images = data.message;

            // Get the container element in the DOM
            const dogImagesContainer = document.getElementById("dog-image-container");

            // Iterate through the images and create image elements
            images.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                imgElement.alt = "Dog";
                
                // Append the image element to the container
                dogImagesContainer.appendChild(imgElement);
            });
        })

        fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            
             breedsObject = data.message;
            renderBreeds("");
            
            // Iterate through the breeds and create li elements
            
            const filterInput = document.getElementById("breed-dropdown");
            filterInput.addEventListener("input", function () {
                const filterValue = filterInput.value;
                renderBreeds(filterValue);
            });
        })

        


function renderBreeds(filter) {
    const dogBreedsList = document.getElementById("dog-breeds");
    dogBreedsList.innerHTML = ""; // Clear existing list

    for (const breed in breedsObject) {
        if (breed.startsWith(filter)) {
            const liElement = document.createElement("li");
            liElement.textContent = breed;

            liElement.addEventListener("click", function () {
                liElement.style.color = "yellow";
            });

            dogBreedsList.appendChild(liElement);
        }
    }
}

});