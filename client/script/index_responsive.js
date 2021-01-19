const btn = document.querySelector(".fas.fa-search");
const searchBar = document.querySelector(".search-bar-responsive");
const btnMenu = document.querySelector(".fas.fa-bars");
const themeBar = document.querySelector(".theme-bar");
const OSBar = document.querySelector(".OS-bar");

let openedSearchBar = false;
let openedOSThemeBars = true;
let mobileSetup = false;

if (screen.width < 1000) {
  if (!mobileSetup) {
    OSBar.style.display = "none";
    themeBar.style.display = "none";
    openedOSThemeBars = false;
    searchBar.style.display = "none";
    openedSearchBar = false;
  }
  mobileSetup = true;
}

window.addEventListener('resize', () => {
  if (screen.width < 1000) {
    if (!mobileSetup) {
      OSBar.style.display = "none";
      themeBar.style.display = "none";
      openedOSThemeBars = false;
      searchBar.style.display = "none";
      openedSearchBar = false;
    }
    mobileSetup = true;
  } else {
    mobileSetup = false;
    OSBar.style.display = "flex";
    themeBar.style.display = "flex";
    searchBar.style.display = "none";
    openedSearchBar = false;
    openedOSThemeBars = true;
  }
});

btn.addEventListener('click', () => {
  if (!openedSearchBar && mobileSetup) {
    searchBar.style.display = "flex";
    openedSearchBar = true;
  } else {
    searchBar.style.display = "none";
    openedSearchBar = false;
  }
});

btnMenu.addEventListener('click', () => {
  if (openedOSThemeBars) {
    OSBar.style.display = "none";
    themeBar.style.display = "none";
    searchBar.classList.remove("boxy");
    openedOSThemeBars = false;
  } else {
    OSBar.style.display = "flex";
    themeBar.style.display = "flex";
    searchBar.classList.add("boxy");
    openedOSThemeBars = true;
  }
});
