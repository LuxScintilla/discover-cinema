// const mySearch = "avatar";
// const imgPath = "https://image.tmdb.org/t/p/original";
// fetch(`/.netlify/functions/fetch-movie?query=${mySearch}`).then((response) =>
//   console.log(response.json())
// );
// fetch(`/.netlify/functions/fetch-movie`).then((response) =>
//   console.log(response.json())
// );
document.addEventListener("click", (e)=>{
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;
    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }
    document.querySelectorAll("[data-dropdown].active").forEach((dropdown)=>{
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    });
});
const loadBackground = async function() {
    const imgPath = "https://image.tmdb.org/t/p/original";
    try {
        const response = await fetch(`/.netlify/functions/fetch-movie`);
        const movies = await response.json();
        document.body.style.backgroundImage = `linear-gradient(to bottom right, rgba(19, 20, 43, 0.6), rgba(0, 0, 0, 0.8)), url(${imgPath}${movies.results[8].backdrop_path})`;
    } catch (error) {
        console.log(error);
    }
};
loadBackground();

//# sourceMappingURL=index.aa69868b.js.map
