const cards = document.querySelectorAll(".slider-header .card");

let currentSlide = 0;

if (cards.length > 0) {
    cards[currentSlide].classList.add("active");

    setInterval(() => {
        cards[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= cards.length) {
            currentSlide = 0;
        }

        cards[currentSlide].classList.add("active");
    }, 8000);
}






const filmCatalog = [
    {
        genre: "Triller",
        year: "2026",
        rating: "6.8",
        time: "128 min",
        image: "images/slidshows/popular films/Wuthering Heights.png"
    },
    {
        genre: "Horror",
        year: "2025",
        rating: "7.1",
        time: "137 min",
        image: "images/slidshows/popular films/Sinners.png"
    },
    {
        genre: "Horror",
        year: "2025",
        rating: "8.5",
        time: "150 min",
        image: "images/slidshows/popular films/Frankenstein.png"
    },
    {
        genre: "Action",
        year: "2026",
        rating: "6.1",
        time: "136 min",
        image: "images/slidshows/popular films/One battle after another.png"
    },
    {
        genre: "Action",
        year: "2018",
        rating: "6.1",
        time: "102 min",
        image: "images/slidshows/popular films/Skyscraper.png"
    },
    {
        genre: "Horror",
        year: "2025",
        rating: "7.6",
        time: "162 min",
        image: "images/slidshows/popular films/Weapon.png"
    }
];

const popularFilmsSlider = document.getElementById("slider_New_films");

if (popularFilmsSlider) {
    filmCatalog.forEach((film) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        slide.innerHTML = `
            <img src="${film.image}" alt="${film.title}">
            <div class="container_info">
                <p class="genre">Genre: ${film.genre}</p>
                <p class="year">Year: ${film.year}</p>
                <p class="rating">Rating: ${film.rating}</p>
                <p class="time">Time: ${film.time}</p>
            </div>
        `;

        popularFilmsSlider.appendChild(slide);
    });
}



const popularFilmSlides = document.querySelectorAll(".slider_New_films .slide");

let currentPopularFilmGroup = 0;
let popularCardsPerSlide = getPopularCardsPerSlide();
let popularFilmGroupsCount = Math.ceil(popularFilmSlides.length / popularCardsPerSlide);
const popularSlideDelay = 4000;
let popularFilmSliderInterval;

function getPopularCardsPerSlide() {
    return window.innerWidth <= 768 ? 1 : 3;
}

function updatePopularFilmSliderSettings() {
    popularCardsPerSlide = getPopularCardsPerSlide();
    popularFilmGroupsCount = Math.ceil(popularFilmSlides.length / popularCardsPerSlide);

    if (currentPopularFilmGroup >= popularFilmGroupsCount) {
        currentPopularFilmGroup = 0;
    }

    showPopularFilmGroup(currentPopularFilmGroup);
}

function showPopularFilmGroup(index) {
    if (popularFilmSlides.length === 0) {
        return;
    }

    if (index >= popularFilmGroupsCount) {
        currentPopularFilmGroup = 0;
    } else if (index < 0) {
        currentPopularFilmGroup = popularFilmGroupsCount - 1;
    } else {
        currentPopularFilmGroup = index;
    }

    const firstCardIndex = currentPopularFilmGroup * popularCardsPerSlide;
    const lastCardIndex = firstCardIndex + popularCardsPerSlide;

    popularFilmSlides.forEach((slide, slideIndex) => {
        slide.classList.remove("active");

        if (slideIndex >= firstCardIndex && slideIndex < lastCardIndex) {
            slide.classList.add("active");
        }
    });
}

function nextPopularFilmGroup() {
    showPopularFilmGroup(currentPopularFilmGroup + 1);
}

function startPopularFilmSlider() {
    popularFilmSliderInterval = setInterval(nextPopularFilmGroup, popularSlideDelay);
}

function stopPopularFilmSlider() {
    clearInterval(popularFilmSliderInterval);
}

if (popularFilmsSlider && popularFilmSlides.length > 0) {
    showPopularFilmGroup(0);
    startPopularFilmSlider();

    popularFilmsSlider.addEventListener("mouseenter", stopPopularFilmSlider);

    popularFilmsSlider.addEventListener("mouseleave", () => {
        stopPopularFilmSlider();
        startPopularFilmSlider();
    });

    window.addEventListener("resize", updatePopularFilmSliderSettings);
}





const New_in_Catalog = [
    {
        genre: "Triller",
        year: "2026",
        rating: "8.4",
        time: "107 min",
        image: "images/slidshows/new films/loner.png"
    },
    {
        genre: "Drama",
        year: "2026",
        rating: "7.6",
        time: "97 min",
        image: "images/slidshows/new films/In the Grey.png"
    },
    {
        genre: "Drama",
        year: "2026",
        rating: "8.3",
        time: "140 min",
        image: "images/slidshows/new films/Crime 101.png"
    },
    {
        genre: "Adventure",
        year: "2026",
        rating: "7.6",
        time: "172 min",
        image: "images/slidshows/new films/The Odyssey.png"
    },
    {
        genre: "War",
        year: "2026",
        rating: "8.2",
        time: "120 min",
        image: "images/slidshows/new films/Killhouse.png"
    },
    {
        genre: "Comedy",
        year: "2026",
        rating: "5.4",
        time: "90 min",
        image: "images/slidshows/new films/Will You Get Divorced.png"
    }
];

const newFilmsSlider = document.getElementById("slider_New_films_on_site");

if (newFilmsSlider) {
    New_in_Catalog.forEach((film) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        slide.innerHTML = `
            <img src="${film.image}" alt="${film.title}">
            <div class="container_info">
                <p class="genre">Genre: ${film.genre}</p>
                <p class="year">Year: ${film.year}</p>
                <p class="rating">Rating: ${film.rating}</p>
                <p class="time">Time: ${film.time}</p>
            </div>
        `;

        newFilmsSlider.appendChild(slide);
    });
}

const newFilmSlides = document.querySelectorAll(".slider_New_films_on_site .slide");

let currentNewFilmGroup = 0;
let newFilmCardsPerSlide = getNewFilmCardsPerSlide();
let newFilmGroupsCount = Math.ceil(newFilmSlides.length / newFilmCardsPerSlide);
const newFilmSlideDelay = 4000;
let newFilmSliderInterval;

function getNewFilmCardsPerSlide() {
    return window.innerWidth <= 768 ? 1 : 2;
}

function updateNewFilmSliderSettings() {
    newFilmCardsPerSlide = getNewFilmCardsPerSlide();
    newFilmGroupsCount = Math.ceil(newFilmSlides.length / newFilmCardsPerSlide);

    if (currentNewFilmGroup >= newFilmGroupsCount) {
        currentNewFilmGroup = 0;
    }

    showNewFilmGroup(currentNewFilmGroup);
}

function showNewFilmGroup(index) {
    if (newFilmSlides.length === 0) {
        return;
    }

    if (index >= newFilmGroupsCount) {
        currentNewFilmGroup = 0;
    } else if (index < 0) {
        currentNewFilmGroup = newFilmGroupsCount - 1;
    } else {
        currentNewFilmGroup = index;
    }

    const firstCardIndex = currentNewFilmGroup * newFilmCardsPerSlide;
    const lastCardIndex = firstCardIndex + newFilmCardsPerSlide;

    newFilmSlides.forEach((slide, slideIndex) => {
        slide.classList.remove("active");

        if (slideIndex >= firstCardIndex && slideIndex < lastCardIndex) {
            slide.classList.add("active");
        }
    });
}

function nextNewFilmGroup() {
    showNewFilmGroup(currentNewFilmGroup + 1);
}

function startNewFilmSlider() {
    newFilmSliderInterval = setInterval(nextNewFilmGroup, newFilmSlideDelay);
}

function stopNewFilmSlider() {
    clearInterval(newFilmSliderInterval);
}

if (newFilmsSlider && newFilmSlides.length > 0) {
    showNewFilmGroup(0);
    startNewFilmSlider();

    newFilmsSlider.addEventListener("mouseenter", stopNewFilmSlider);

    newFilmsSlider.addEventListener("mouseleave", () => {
        stopNewFilmSlider();
        startNewFilmSlider();
    });

    window.addEventListener("resize", updateNewFilmSliderSettings);
}




const genresSlider = document.getElementById("slider_Genres");
const genreSlides = document.querySelectorAll(".slider_genres .genre_slide");
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");

let currentGenreGroup = 0;
let genreCardsPerSlide = getGenreCardsPerSlide();
let genreGroupsCount = Math.ceil(genreSlides.length / genreCardsPerSlide);

function getGenreCardsPerSlide() {
    return window.innerWidth <= 768 ? 1 : 4;
}

function updateGenreSliderSettings() {
    genreCardsPerSlide = getGenreCardsPerSlide();
    genreGroupsCount = Math.ceil(genreSlides.length / genreCardsPerSlide);

    if (currentGenreGroup >= genreGroupsCount) {
        currentGenreGroup = 0;
    }

    showGenreGroup(currentGenreGroup);
}

function showGenreGroup(index) {
    if (genreSlides.length === 0) {
        return;
    }

    if (index >= genreGroupsCount) {
        currentGenreGroup = 0;
    } else if (index < 0) {
        currentGenreGroup = genreGroupsCount - 1;
    } else {
        currentGenreGroup = index;
    }

    const firstCardIndex = currentGenreGroup * genreCardsPerSlide;
    const lastCardIndex = firstCardIndex + genreCardsPerSlide;

    genreSlides.forEach((slide, slideIndex) => {
        slide.classList.remove("active");

        if (slideIndex >= firstCardIndex && slideIndex < lastCardIndex) {
            slide.classList.add("active");
        }
    });
}

function nextGenreGroup() {
    showGenreGroup(currentGenreGroup + 1);
}

function prevGenreGroup() {
    showGenreGroup(currentGenreGroup - 1);
}

if (genresSlider && genreSlides.length > 0) {
    showGenreGroup(0);

    if (arrowRight) {
        arrowRight.addEventListener("click", nextGenreGroup);
    }

    if (arrowLeft) {
        arrowLeft.addEventListener("click", prevGenreGroup);
    }

    window.addEventListener("resize", updateGenreSliderSettings);
}




const Newpage_Catalogfilm = [
    {
        genre: "Triller",
        year: "2026",
        rating: "6.2",
        time: "114 min",
        image: "images/films/new films/A whisper outside the window.png"
    },
    {
        genre: "Horror",
        year: "2025",
        rating: "6.2",
        time: "144 min",
        image: "images/films/new films/Bastard.png"
    },
    {
        genre: "Drama",
        year: "2026",
        rating: "8.5",
        time: "180 min",
        image: "images/films/new films/Bride.png"
    }
];

const imagesGridCatalog = document.getElementById("images_grid_catalog");

if (imagesGridCatalog) {

    imagesGridCatalog.innerHTML = "";

    Newpage_Catalogfilm.forEach((film) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        slide.innerHTML = `
            <img src="${film.image}" alt="${film.title}">
            <div class="container_info">
                <p class="genre">Genre: ${film.genre}</p>
                <p class="year">Year: ${film.year}</p>
                <p class="rating">Rating: ${film.rating}</p>
                <p class="time">Time: ${film.time}</p>
            </div>
        `;

        imagesGridCatalog.appendChild(slide);
    });
}




const Filmspage_Gridfilm = [
    {
        genre: "Thriller",
        year: "2025",
        rating: "5.7",
        time: "139 min",
        image: "images/films/films/After the Hunt.png"
    },
    {
        genre: "Drama, Music, Romance",
        year: "2009",
        rating: "7.2",
        time: "144 min",
        image: "images/films/films/Crazy Heart.png"
    },
    {
        genre: "Comedy",
        year: "2018",
        rating: "6.9",
        time: "112 min",
        image: "images/films/films/I feel sorry for you..png"
    },
    {
        genre: "Comedy, Musical, Drama",
        year: "2019",
        rating: "8.9",
        time: "109 min",
        image: "images/films/films/Let's dance.png"
    },
    {
        genre: "Sports, Comedy, Drama, Dark Comedy",
        year: "2025",
        rating: "7.5",
        time: "149 min",
        image: "images/films/films/Marty the Magnificent.png"
    },
    {
        genre: "Comedy",
        year: "2000",
        rating: "7.5",
        time: "116 min",
        image: "images/films/films/Me, Myself & Irene.png"
    },
    {
        genre: "Action, Adventure, Fantasy",
        year: "1999",
        rating: "7.5",
        time: "124 min",
        image: "images/films/films/Mummy.png"
    },
    {
        genre: "Comedy",
        year: "1996",
        rating: "8.9",
        time: "105 min",
        image: "images/films/films/The First Wives Club.png"
    },
    {
        genre: "Action, Adventure, Fantasy",
        year: "2004",
        rating: "7.4",
        time: "130 min",
        image: "images/films/films/The Librarian Quest for the Spear of Destiny.png"
    }
];

const images_grid_catalog_filmpage = document.getElementById("images_grid_catalog_filmpage");

if (images_grid_catalog_filmpage) {
    images_grid_catalog_filmpage.innerHTML = "";

    Filmspage_Gridfilm.forEach((film) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        slide.innerHTML = `
            <img src="${film.image}" alt="${film.title}">
            <div class="container_info">
                <p class="genre">Genre: ${film.genre}</p>
                <p class="year">Year: ${film.year}</p>
                <p class="rating">Rating: ${film.rating}</p>
                <p class="time">Time: ${film.time}</p>
            </div>
        `;

        images_grid_catalog_filmpage.appendChild(slide);
    });
}

const genreItems = document.querySelectorAll(".genres_item");

genreItems.forEach((item) => {
    const textGenre = item.querySelector(".text_genre");
    if (textGenre) {
        textGenre.style.visibility = "hidden";

        item.addEventListener("mouseenter", () => {
            textGenre.style.visibility = "visible";
        });

        item.addEventListener("mouseleave", () => {
            textGenre.style.visibility = "hidden";
        });
    }
});






const gridSerial = [
    {
        genre: "Drama,Psychological Thriller",
        year: "2015",
        rating: "5.7",
        time: "92 min",
        Seasons: "1",
        Episodes: "6",
        image: "images/serials/Benefactor.png"
    },
    {
        genre: "Comedy",
        year: "2004",
        rating: "8.4",
        time: "30 min",
        Seasons: "3",
        Episodes: "18",
        image: "images/serials/Black Books.png"
    },
    {
        genre: "Action, Adventure, Fantasy",
        year: "2015",
        rating: "8.4",
        time: "48 min",
        Seasons: "1",
        Episodes: "65",
        image: "images/serials/Cobra Kai.png"
    },
    {
        genre: "Crime, Drama, Thriller, and Black Comedy",
        year: "2023",
        rating: "6.5",
        time: "55 min",
        Seasons: "2",
        Episodes: "16",
        image: "images/serials/Land of Fires.png"
    },
    {
        genre: "Spy thriller, action, and political drama",
        year: "2023",
        rating: "6.5",
        time: "42 min",
        Seasons: "3",
        Episodes: "8",
        image: "images/serials/Lioness.png"
    },
    {
        genre: "Drama",
        year: "October 5, 1965 – November 28, 1969",
        rating: "6.5-10",
        time: "30 min",
        Seasons: "1",
        Episodes: "430",
        image: "images/serials/Newcomer.png"
    },
    {
        genre: "Drama, Mystery, Thriller",
        year: "2023",
        rating: "6.6-10",
        time: "50 min",
        Seasons: "1",
        Episodes: "8",
        image: "images/serials/Shelter.png"
    },
    {
        genre: "Action, Drama, Historical Fiction",
        year: "2025",
        rating: "6.6-10",
        time: "60 min",
        Seasons: "1",
        Episodes: "10",
        image: "images/serials/Spartacus Ashur's House.png"
    },
    {
        genre: "Drama",
        year: "2026",
        rating: "7.4",
        time: "130 min",
        Seasons: "1",
        Episodes: "9",
        image: "images/serials/The Dutton Ranch.png"
    },
    {
        genre: "Crime Drama",
        year: "2026",
        rating: "7.4",
        time: "60 min",
        Seasons: "1",
        Episodes: "10",
        image: "images/serials/The Killer's Memory.png"
    }
];

const images_grid_serials = document.getElementById("images_grid_serials");

if (images_grid_serials) {
    images_grid_serials.innerHTML = "";

    gridSerial.forEach((film) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        slide.innerHTML = `
            <img src="${film.image}" alt="${film.title}">
            <div class="container_info">
                <p class="genre">Genre: ${film.genre}</p>
                <p class="year">Year: ${film.year}</p>
                <p class="rating">Rating: ${film.rating}</p>
                <p class="time">Time: ${film.time}</p>
                <p class="seasons">Seasons: ${film.Seasons}</p>
                <p class="episodes">Episodes: ${film.Episodes}</p>
            </div>
        `;

        images_grid_serials.appendChild(slide);
    });
}


const iconSearch = document.getElementById("icon_Search");
const input = document.getElementById("search");

const allSiteMedia = [
    ...(typeof filmCatalog !== "undefined" ? filmCatalog : []),
    ...(typeof New_in_Catalog !== "undefined" ? New_in_Catalog : []),
    ...(typeof Newpage_Catalogfilm !== "undefined" ? Newpage_Catalogfilm : []),
    ...(typeof Filmspage_Gridfilm !== "undefined" ? Filmspage_Gridfilm : []),
    ...(typeof gridSerial !== "undefined" ? gridSerial : [])
].filter((item, index, self) =>
    index === self.findIndex((t) => t.image === item.image)
);

let searchResultsContainer = document.getElementById("global_search_results");
if (!searchResultsContainer) {
    searchResultsContainer = document.createElement("section");
    searchResultsContainer.id = "global_search_results";
    searchResultsContainer.className = "catalog_films";
    searchResultsContainer.style.display = "none";
    searchResultsContainer.style.padding = "20px";

    const navElement = document.querySelector(".menu");
    if (navElement && navElement.parentNode) {
        navElement.parentNode.insertBefore(searchResultsContainer, navElement.nextSibling);
    }
}

function renderMediaCard(item) {
    const isSerial = item.Seasons || item.Episodes;
    return `
        <div class="slide" style="display: inline-block; margin: 10px;">
            <img src="${item.image}" alt="${item.title}">
            <div class="container_info">
                <p class="genre">Genre: ${item.genre}</p>
                <p class="year">Year: ${item.year}</p>
                <p class="rating">Rating: ${item.rating}</p>
                <p class="time">Time: ${item.time}</p>
                ${isSerial ? `<p class="seasons">Seasons: ${item.Seasons}</p>` : ""}
                ${isSerial ? `<p class="episodes">Episodes: ${item.Episodes}</p>` : ""}
            </div>
        </div>
    `;
}

function searchFilm() {
    if (!input) return;
    const query = input.value.trim().toLowerCase();

    const header = document.getElementById("header");
    const mainContent = document.querySelector("main");
    const pageHeadings = document.querySelectorAll("h1");
    const pageSections = document.querySelectorAll(".catalog_films_page, .catalog_films:not(#global_search_results), .serials, .genre, .genres");

    if (query === "") {
        if (searchResultsContainer) {
            searchResultsContainer.style.display = "none";
            searchResultsContainer.innerHTML = "";
        }
        if (header) header.style.display = "";
        if (mainContent) mainContent.style.display = "";
        pageHeadings.forEach((h1) => (h1.style.display = ""));
        pageSections.forEach((section) => (section.style.display = ""));
        return;
    }

    const matchedItems = allSiteMedia.filter((item) => {
        const matchGenre = item.genre && item.genre.toLowerCase().includes(query);
        const matchYear = item.year && String(item.year).toLowerCase().includes(query);
        const matchRating = item.rating && String(item.rating).toLowerCase().includes(query);
        const matchTitle = item.title && item.title.toLowerCase().includes(query);
        return Boolean(matchGenre || matchYear || matchRating || matchTitle);
    });

    if (header) header.style.display = "none";
    if (mainContent) mainContent.style.display = "none";
    pageHeadings.forEach((h1) => (h1.style.display = "none"));
    pageSections.forEach((section) => (section.style.display = "none"));


    if (searchResultsContainer) {
        searchResultsContainer.style.display = "block";
        if (matchedItems.length === 0) {
            searchResultsContainer.innerHTML = `
                <div style="text-align: center; color: #fff; padding: 40px;">
                    <h2>No films or series found for "${query}"</h2>
                </div>
            `;
        } else {
            searchResultsContainer.innerHTML = `
                <h2 style="color: #fff; margin-bottom: 20px; text-align: center;">Search results (${matchedItems.length}):</h2>
                <div class="grid_catalog" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
                    ${matchedItems.map(renderMediaCard).join("")}
                </div>
            `;
        }
    }
}

if (input) {
    input.addEventListener("input", searchFilm);
}

if (iconSearch) {
    iconSearch.addEventListener("click", (e) => {
        e.preventDefault();
        searchFilm();
    });
}



