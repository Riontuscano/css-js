document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const imageSelector = document.getElementById("imageSelector");
    const showImageButton = document.getElementById("showImageButton");

    // Create an array of image filenames
    const imageFiles = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        // Add more image filenames as needed
    ];

    // Populate the select dropdown with image options
    imageFiles.forEach((imageName, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = imageName;
        imageSelector.appendChild(option);
    });

    // Event listener for the "Show Image" button
    showImageButton.addEventListener("click", function () {
        const selectedIndex = imageSelector.value;
        const selectedImageName = imageFiles[selectedIndex];
        const imageUrl = `images/${selectedImageName}`;

        // Open a new window or tab to display the selected image
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`<img src="${imageUrl}" alt="${selectedImageName}">`);
    });
});
