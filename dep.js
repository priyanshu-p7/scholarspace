// Function to create a floating window
function createFloatingWindow(message) {
    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    document.body.appendChild(overlay);

    // Create floating window
    const floatingDiv = document.createElement("div");
    floatingDiv.id = "floating-window";
    floatingDiv.innerHTML = `
        <p>${message}</p>
        <button id="close-button">Close</button>
    `;
    document.body.appendChild(floatingDiv);

    // Add click event for the close button
    document.getElementById("close-button").addEventListener("click", function () {
        floatingDiv.remove();
        overlay.remove();
    });
}

document.querySelector("ul li:nth-child(3) a").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    createFloatingWindow("coming soon!");
});

document.querySelector("ul li:nth-child(2) a").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    createFloatingWindow("coming soon!");
});
document.querySelector("ul li:nth-child(4) a").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    createFloatingWindow("coming soon!");
});