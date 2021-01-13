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
            //   Show them a menu of options they can do:
            Console.WriteLine();
            Console.WriteLine("Menu:");
            Console.WriteLine("ADD - Add a new pet");
            Console.WriteLine("SEE - See all the pets");
            Console.WriteLine("ADOPT - Adopt a pet");
            Console.WriteLine("UPDATE - Update a pet");
            Console.WriteLine("QUIT - Quit the app");
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
