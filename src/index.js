console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const breedFilter = document.getElementById("breed-dropdown");

    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImages = data.message;
            dogImages.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.log(error));
    }
);