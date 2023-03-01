// Initialize variables with values of appropriate types
const movieName = "The Shawshank Redemption";
const starring = ["Tim Robbins", "Morgan Freeman"];
const language = "English";
const ratings = {
  imdb: 9.3,
  rottenTomatoes: 90,
  metacritic: 80
};

// Display movie details using template literals
console.log(`Movie Name: ${movieName}`);
console.log(`Starring: ${starring.join(", ")}`);
console.log(`Language: ${language}`);
console.log(`Ratings:`);
console.log(`- IMDB: ${ratings.imdb}`);
console.log(`- Rotten Tomatoes: ${ratings.rottenTomatoes}%`);
console.log(`- Metacritic: ${ratings.metacritic}`);
