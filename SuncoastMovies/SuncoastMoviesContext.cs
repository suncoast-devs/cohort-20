using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace SuncoastMovies
{
    public class SuncoastMoviesContext : DbContext
    {
        //                  The movies table....
        //
        //     Make available as a property named "Movies"
        //
        //                     Table name
        //                     |
        //           Class name|
        //           |         |
        //     Kinda | Like a L|ist<Movie>
        //     |     |         |
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Actor> Actors { get; set; }

        //
        // Eventually this will be a long list of DbSet<things> where we have one
        // property (DbSet) for every table we need to work with
        //

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //                                                  This is what you would type >    pgcli SuncoastMovies
            //                                                  |
            //                                                  |
            optionsBuilder.UseNpgsql("server=localhost;database=SuncoastMovies");

            var loggerFactory = LoggerFactory.Create(builder => builder.AddConsole());
            optionsBuilder.UseLoggerFactory(loggerFactory);

        }
    }
}