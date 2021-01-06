using System;

namespace Loops
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.Write("What is your name? ");
            // var name = Console.ReadLine();

            // while (name != "quit")
            // {
            //     Console.WriteLine($"Hello {name}");

            //     Console.Write("What is your name? ");
            //     name = Console.ReadLine();
            // }

            var currentNumber = 0;

            while (currentNumber < 10)
            {
                Console.WriteLine(currentNumber);
                currentNumber = currentNumber + 1;
            }

            Console.WriteLine($"The number is now {currentNumber}");
        }
    }
}
