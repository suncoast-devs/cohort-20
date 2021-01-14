using System;
using System.Collections.Generic;

namespace NumberTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = new List<int>();

            bool hasQuit = false;
            while (hasQuit == false)
            {
                Console.WriteLine();
                // Print out our numbers on one line seperated by spaces
                Console.WriteLine(String.Join(" ", numbers));

                Console.Write("What is a number you'd like to track? (blank to quit) ");
                var numberString = Console.ReadLine().Trim();
                if (numberString == "")
                {
                    hasQuit = true;
                }
                else
                {
                    var number = int.Parse(numberString);

                    numbers.Add(number);
                }
            }
        }
    }
}
