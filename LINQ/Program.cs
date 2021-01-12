using System;
using System.Collections.Generic;

namespace LINQ
{
    class Program
    {
        static void Main(string[] args)
        {
            // Here is our original array
            var scores = new List<int> { 42, 100, 98, 15, 1, 2, 3, 4, 5, 6, 7, 8 };

            // Here is our handy Double-er
            Func<int, int> MultiplyBy2 = value => value * 2;

            // Make a new list to store the results
            var newScores = new List<int>();

            // Go through each score in the scores list
            foreach (var score in scores)
            {
                // Make a doubling of that score
                var doubled = MultiplyBy2(score);

                // Add it to our new list
                newScores.Add(doubled);
            }

            // Print out the scores comma separated
            Console.WriteLine(String.Join(',', newScores));
        }
    }
}
