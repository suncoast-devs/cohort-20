using System.Collections.Generic;

namespace SuncoastMovies
{
    public class Rating
    {
        // Define properties for *EACH* column from the table
        public int Id { get; set; }
        public string Description { get; set; }

        // Rating has many movies
        public List<Movie> Movies { get; set; }
    }
}