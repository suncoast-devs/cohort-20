using System;
using System.Linq;

namespace SuncoastMovies
{

    class Program
    {
        static void Main(string[] args)
        {
            // Get a new context which will connect to the database
            var context = new SuncoastMoviesContext();

            // Get a reference to our collection of movies.
            // NOTE: this doesn't yet access any of them, just gives
            //       us a variable that knows how.
            var movies = context.Movies;

            var movieCount = movies.Count();
            Console.WriteLine($"There are {movieCount} movies!");
        }
    }
}
