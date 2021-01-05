using System;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to C#");
            Console.WriteLine("This is our second program");

            // This is a string
            var name = "Samantha";
            Console.WriteLine(name);

            // This creates a number
            var score = 95;
            Console.WriteLine(score);

            // Work with booleans
            var theCakeIsALie = true;
            var worldIsFlat = false;
            var notrequired = true;
            var justConvention = true;
            Console.WriteLine(theCakeIsALie);
            Console.WriteLine(worldIsFlat);
            Console.WriteLine(notrequired);
            Console.WriteLine(justConvention);

            // Make a new string and learn how to get the length
            var sentence = "The quick brown fox jumped over the lazy dog";
            var howLong = sentence.Length;
            Console.WriteLine(sentence);
            Console.WriteLine(howLong);

            // Work with characters from a string
            var firstLetter = sentence[0];
            var secondLetter = sentence[1];
            var thirdLetter = sentence[2];
            Console.WriteLine(firstLetter);
            Console.WriteLine(secondLetter);
            Console.WriteLine(thirdLetter);

            Console.WriteLine("--------------------------");

            // This prints 96, but leaves "score" alone, still 95
            Console.WriteLine(score + 1);

            // This still prints 95
            Console.WriteLine(score);

            score = score + 5;
            // This should print 100
            Console.WriteLine(score);

            // This should print 145
            score = 145;
            Console.WriteLine(score);

            // This makes score = 145 + 44 (189)
            score = score + howLong;
            Console.WriteLine(score);

            // Understands order of parenthesis and multiplication  
            score = 5 * (2 + 3);
            Console.WriteLine(score);
            score = 3 + 2 * 5;
            Console.WriteLine(score);

            // the firstLetterVariable isn't changed when we change the sentence variable
            Console.WriteLine(firstLetter);
            sentence = "Welcome to SDG";
            Console.WriteLine(firstLetter);
        }
    }
}
