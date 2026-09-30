# Movie Finder 🎬

A movie search web app built with HTML, CSS and vanilla JavaScript. Search any movie by name and it pulls results from the OMDb API — shows the poster, title and release year in a clean card grid layout.

Built this as a personal practice project to get hands-on with fetch API, async/await and dynamic DOM rendering.

---

## What it does

- Search movies by name using the OMDb API
- Displays results in a responsive card grid
- Each card shows the movie poster, title and release year
- If no poster is available, shows a placeholder image instead
- Shows a loading message while results are being fetched
- Handles errors like "movie not found" or network issues with a proper error message
- Works on both desktop and mobile screens

---

## Project structure

```
movie-finder/
├── index.html       # structure of the page
├── style.css        # all the styling, dark theme, grid layout, responsive
└── script.js        # search logic, API call, rendering results
```

No frameworks. No build tools. Just plain HTML, CSS and JavaScript.

---

## How to run it

Clone the repo and open `index.html` directly in your browser. No installations or setup needed.

```
git clone https://github.com/your-username/movie-finder.git
cd movie-finder
```

Then just open `index.html` in your browser. Double click it or drag it into the browser tab — whatever works for you.

---

## API used

[OMDb API](https://www.omdbapi.com/) — Open Movie Database. Free to use with an API key.

The key is already included in `script.js` so the app works out of the box. If you want to use your own key, register for free at omdbapi.com and replace `7fbc13a8` in this line inside `script.js`:

```js
const response = await fetch(`https://www.omdbapi.com/?apikey=7fbc13a8&s=${encodeURIComponent(movieName)}`);
```

The free plan gives 1000 requests per day which is more than enough for personal use.

---

## How the search works

1. User types a movie name and submits the form
2. `fetch()` sends a GET request to the OMDb API with the search term
3. The API returns a list of matching movies as JSON
4. JavaScript loops through the results and builds the card HTML dynamically
5. Cards are injected into the `#movieResults` div on the page

If the API returns no results, the app shows an error message to the user instead of crashing.

---

## Responsive behavior

On screens wider than 640px the search bar is horizontal and the cards fill the row based on available width. On smaller screens the search bar stacks vertically and cards shrink a bit so more fit per row without horizontal scrolling.

---

## Things I want to add later

- Show more details like IMDb rating, genre and plot summary when you click on a card
- Pagination since OMDb only returns 10 results per page and there's usually more
- Replace the plain "Searching Movies..." text with an actual loading spinner
- Search history so you can go back to what you searched before
- Dark/light mode toggle

---

## Built with

- HTML5
- CSS3 (Flexbox + CSS Grid)
- JavaScript ES6+ (async/await, fetch, template literals)
- [OMDb API](https://www.omdbapi.com/)
- [Font Awesome 6](https://fontawesome.com/) for the clapperboard icon in the header

---

## Author

**Pushpanjali**  
B.Tech CSE — RGUKT Srikakulam
