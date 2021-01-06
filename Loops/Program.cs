using System;
using System.Collections.Generic;

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
                currentNumber++; // Is the same as currentNumber = currentNumber + 1
                // This would increment by 2
                // currentNumber += 2; 
            }


            // Start the counter at 0
            //      |
            //      |        Keep going as long as counter is less than 10
            //      |               |
            //      |               |        Increment counter after each loop is done
            //      |               |             |
            //      |               |             |
            //      V               V             V
            for (var counter = 0; counter < 10; counter++)
            {
                Console.WriteLine($"Doing something, with counter = {counter}");
            }

            var names = new string[] { "Gavin", "Jason", "Andrew", "Luke" };

            var scores = new int[] { 10, 42, 66, 100 };

            var firstName = names[0];
            var secondName = names[1];

            Console.WriteLine($"This first element of the names array is {firstName}");
            Console.WriteLine($"This second element of the names array is {secondName}");

            var nameList = new List<string>() { "Gavin", "Jason", "Andrew", "Luke" };

            var firstNameFromList = nameList[0];
            Console.WriteLine($"This first element of the names list is {firstNameFromList}");

            nameList.Add("George");

            Console.WriteLine("Here come the names in the list:");
            // We want to go through all the names in the list and print them
            // Console.WriteLine(nameList[0]);
            // Console.WriteLine(nameList[1]);
            // Console.WriteLine(nameList[2]);
            // Console.WriteLine(nameList[3]);
            // Console.WriteLine(nameList[4]);
            // Initialize variable index = 0
            // As long as the index is less than LENGTH/COUNT of the list
            // -- print the element of the list found at that index

            for (var index = 0; index < nameList.Count; index++)
            {
                var currentName = nameList[index];

                Console.WriteLine(currentName);
            }

            Console.WriteLine("This is the code after the loop");

            foreach (var name in nameList)
            {
                Console.WriteLine(name);
            }

            Console.WriteLine("This is the code after the foreach loop");
        }
    }
}
