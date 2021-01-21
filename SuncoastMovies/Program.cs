using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

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
            // var movies = context.Movies;

            var movieCount = context.Movies.Count();
            Console.WriteLine($"There are {movieCount} movies!");

            foreach (var movie in context.Movies)
            {
                Console.WriteLine($"There is a movie named {movie.Title}");
            }
            Console.WriteLine("\n\n\n");

            // Now lets go through the movies *AND* join their Ratings
            //
            //                    GET ALL THE MOVIES
            //                    |            |
            //                    |            |   Include is like JOIN
            //                    |            |     |
            //                    |            |     |            What to join with
            //                    |            |     |            |
            //                    v            v     v            v
            foreach (var movie in context.Movies.Include(movie => movie.TheRatingAssociatedToTheMovieObject))
            {
                Console.WriteLine($"There is a movie named {movie.Title} that is rated {movie.TheRatingAssociatedToTheMovieObject.Description}");
            }

            Console.WriteLine("\n\n\n");
            //                                   JOIN TO ROLES                 SECOND JOIN FROM ROLES TO ACTOR
            foreach (var movie in context.Movies.Include(movie => movie.Roles).ThenInclude(role => role.TheAssociatedActor))
            {
                Console.WriteLine($"The movie {movie.Title}");

                foreach (var role in movie.Roles)
                {
                    Console.WriteLine($"- {role.CharacterName} played by {role.TheAssociatedActor.FullName}");
                }
            }

            // Find the rating from the database who's Description is "PG-13"
            //
            // So that we can assign the correct RatingId for the movie we are about to create
            var rating = context.Ratings.First(rating => rating.Description == "PG-13");

            // Make a new movie
            var newMovie = new Movie
            {
                Title = "SpaceBalls",
                PrimaryDirector = "Mel Brooks",
                Genre = "Comedy",
                YearReleased = 1987,
                // Use the rating object's `Id` to assing this movie's RatingId
                RatingId = rating.Id,
            };

            // // Queues up the addition of this movie to the movies table
            // context.Movies.Add(newMovie);

            // // DO IT! ACTUALLY ADD THE MOVIE
            // context.SaveChanges();


            var existingMovie = context.Movies.FirstOrDefault(movie => movie.Title == "SpaceBalls");
            if (existingMovie == null)
            {
                Console.WriteLine("Couldn't find the movie. Uh oh!");
            }
            else
            {
                Console.WriteLine("Updating the movie!");

                // Change the name of the movie 
                existingMovie.Title = "SpaceBalls - best movie ever";

                // DO IT! (make the change in the database)
                context.SaveChanges();
            }


            // Find the first movie who's title is Cujo, if not found, existingMovieToDelete will be `null`
            var existingMovieToDelete = context.Movies.FirstOrDefault(movie => movie.Title == "Cujo");

            // If we found a movie that has the Title Cujo, then...
            if (existingMovieToDelete != null)
            {
                context.Movies.Remove(existingMovieToDelete);

                context.SaveChanges();
            }
        }
    }
}
