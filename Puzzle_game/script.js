const images = document.querySelectorAll(".grid img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");

images.forEach(img => {
    img.addEventListener("click", () => {
        overlayImg.src = img.src;
        overlay.style.display = "flex";
    });
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});
