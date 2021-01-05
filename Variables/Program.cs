using System;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to C#");

            // This is a string
            var name = "Samantha";

            // This creates a number
            var score = 95;

            // Work with booleans
            var theCakeIsALie = true;
            var worldIsFlat = false;
            var notrequired = true;
            var justConvention = true;

            // Make a new string and learn how to get the length
            var sentence = "The quick brown fox jumped over the lazy dog";
            var howLong = sentence.Length;

            // Work with characters from a string
            var firstLetter = sentence[0];
            var secondLetter = sentence[1];
            var thirdLetter = sentence[2];
        }
    }
}
