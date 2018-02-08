const movieDB = [
  {
    title: "Peaceful Warrior",
    rating: "4",
    hasWatched: true
  }, {
    title: "Shawshank Redemption",
    rating: "4.8",
    hasWatched: true
  }, {
    title: "Scarface",
    rating: "4.5",
    hasWatched: false
  }, {
    title: "Datamannen Benny",
    rating: "0",
    hasWatched: true
  }, {
    title: "Fifty Shades of Grey 2",
    rating: "2.3",
    hasWatched: false
  }
]

const movies = movieDB;

movies.forEach((movie) => {
  let result = "You have ";
  if(movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result);
})

/* const list = () => {
  for (let i = 0; i < movieDB.length; i++) {
    const movie = movieDB[i];
    if (movie.hasWatched === false) {
      console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars");
    } else {
      console.log("You have seen \"" + movie.title + "\" - " + movie.rating + " stars")
    }
  }
}
 */

/* Array boilerplate: 
{
  title: "",
  rating: "",
  hasWatched: false
}
*/