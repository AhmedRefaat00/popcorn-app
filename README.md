Here's a `README.md` file for your movie application project:

```markdown
# Movie App 🎬

A comprehensive movie application built with React that allows users to search for movies, view details, and manage a list of watched movies.

## Features

- Search for movies by title.
- Display a list of movies based on the search query.
- View detailed information about a selected movie.
- Add movies to a watched list.
- Remove movies from the watched list.
- Persist watched list using local storage.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Installing

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/movie-app.git
    ```
2. Navigate to the project directory:
    ```sh
    cd movie-app
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Running the App

To start the development server, run:
```sh
npm start
```
or
```sh
yarn start
```
The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the application in your browser.
2. Use the search bar to find movies by title.
3. Click on a movie to view its details.
4. Add the movie to your watched list.
5. View and manage your watched list.

## Code Overview

### `App.js`

- The main component of the application.
- Manages state for the search query, selected movie ID, and watched list.
- Uses custom hooks `useFetchMovies` for fetching movies and `useLocalStorageState` for persisting the watched list.

### Components

- **NavBar**: Contains the logo, search bar, and number of results.
- **Box**: A wrapper component for layout.
- **MoviesList**: Displays a list of movies based on the search query.
- **Summary**: Shows a summary of watched movies.
- **WatchedList**: Displays the list of watched movies.
- **Main**: The main layout component.
- **Logo**: Displays the application logo.
- **Search**: A search input component for querying movies.
- **NumResults**: Shows the number of movies found.
- **MovieDetails**: Displays detailed information about a selected movie.

### Hooks

- **useFetchMovies**: Custom hook to fetch movies based on the search query.
- **useLocalStorageState**: Custom hook to manage state with local storage.

## API Usage

- The app uses the [OMDb API](http://www.omdbapi.com/) to fetch movie data. You need to get an API key from OMDb and add it to your environment variables.
