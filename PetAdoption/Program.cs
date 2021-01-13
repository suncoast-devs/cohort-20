using System;

namespace PetAdoption
{
    class Program
    {
        //                        The method's input
        //                        |
        //                        v
        static void BannerMessage(string message)
        {
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine(message);
            Console.WriteLine();
            Console.WriteLine();
        }

        static void Main(string[] args)
        {
            // Welcome the user to the application
            BannerMessage("Welcome to our Pet Adoption Agency");

            // While the user hasn't chosen to quit the application
            // Problem: want to keep a loop going until the user choose to quit
            // Data: A boolean value that indicates if they have opted to quit
            // Algorithm:
            //       Before the loop, set our boolean to false: they haven't quit
            var userHasChosenToQuit = false;
            //       while our boolean is false
            while (userHasChosenToQuit == false)
            {
                //          show the menu
                //   Show them a menu of options they can do:
                Console.WriteLine();
                Console.WriteLine("Menu:");
                Console.WriteLine("ADD - Add a new pet");
                Console.WriteLine("SEE - See all the pets");
                Console.WriteLine("ADOPT - Adopt a pet");
                Console.WriteLine("UPDATE - Update a pet");
                Console.WriteLine("QUIT - Quit the app");
                Console.WriteLine();
                Console.Write("What is your choice? ");
                var choice = Console.ReadLine().ToUpper().Trim();


                //          if the user's choice is "QUIT", set the boolean to true
                if (choice == "QUIT")
                {
                    userHasChosenToQuit = true;
                }
            }

            //     - Add a new pet
            //     - See all the pets up for adoption
            //     - Input a name of a pet that has been adopted to remove them from the list
            //     - Input a name of a pet and update their size
            //     - Quit the applications

            // Say goodbye
            BannerMessage("Goodbye");
        }
    }
}
