namespace SuncoastMovies
{
    public class Role
    {
        public int Id { get; set; }
        public string CharacterName { get; set; }

        // Roles belongs to a movie
        public int MovieId { get; set; }
        public Movie TheAssociatedMovie { get; set; }

        // Roles belongs to an actor
        public int ActorId { get; set; }
        public Actor TheAssociatedActor { get; set; }
    }
}