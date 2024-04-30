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
// Challenge 2: Fetch and display dog breeds
fetch(breedUrl)
.then(response => response.json())
.then(data => {
    const breeds = Object.keys(data.message);
    breeds.forEach(breed => {
        const breedItem = document.createElement("li");
        breedItem.textContent = breed;
        breedList.appendChild(breedItem);
    });
})
.catch(error => console.log(error));

// Challenge 3: Change font color on click
breedList.addEventListener("click", function(event) {
if (event.target.tagName === "LI") {
    event.target.style.color = "blue"; // Change color to your preference
}
});

// Challenge 4: Filter breeds by starting letter
breedFilter.addEventListener("change", function(event) {
const selectedLetter = event.target.value;
const breedItems = breedList.getElementsByTagName("li");

Array.from(breedItems).forEach(item => {
    if (item.textContent.startsWith(selectedLetter)) {
        item.style.display = "list-item";
    } else {
        item.style.display = "none";
    }
});
});
