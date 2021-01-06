using System;

namespace ControlFlow
{
    class Program
    {
        static void Main(string[] args)
        {
            var name = "Sam";

            if (name == "Paul")
            {
                Console.WriteLine("Here");
            }
            else if (name == "Dorothy")
            {
                Console.WriteLine("Also here");
            }
            else if (name == "Sam")
            {
                Console.WriteLine("Here again");
            }
            else
            {
                Console.WriteLine("Didn't find anything");
            }

            Console.WriteLine("Pick back up here...");


            switch (name)
            {
                case "Paul":
                    Console.WriteLine("Here");
                    break;
                case "Dorothy":
                    Console.WriteLine("Also Here");
                    break;
                case "Sam":
                    Console.WriteLine("Here Again");
                    break;
                default:
                    Console.WriteLine("Didn't find anything");
                    break;
            }

            var score = 100;

            switch (score)
            {
                case < 20:
                    Console.WriteLine("The score is good");
                    break;

                case > 95:
                    Console.WriteLine("This score is really good");
                    break;
            }

            Console.WriteLine("Pick back up here after the switch...");
        }
    }
}
