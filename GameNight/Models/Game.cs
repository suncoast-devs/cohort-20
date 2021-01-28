using System;
using System.Collections.Generic;

namespace GameNight.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Host { get; set; }
        public string Address { get; set; }
        public DateTime When { get; set; }
        public int MinimumPlayers { get; set; }
        public int MaximumPlayers { get; set; }

        public List<Player> Players { get; set; }
    }
}