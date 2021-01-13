using System;
using System.Collections.Generic;
using System.Linq;

namespace PetAdoption
{
    class Pet
    {
        // - `Species` - string
        public string Species { get; set; }
        // - `Gender` - string
        public string Gender { get; set; }
        // - `Age` - int
        public int Age { get; set; }
        // - `Name` - string
        public string Name { get; set; }
        // - `Color` - string
        public string Color { get; set; }
        // - `Size` - string
        public string Size { get; set; }
    }

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
            // | Species | Gender | Age | Name    | Color  | Size   |
            // | ------- | ------ | --- | ------- | ------ | ------ |
            // | Dog     | Female | 1   | Sadie   | Blonde | Medium |
            // | Cat     | Male   | 3   | Russell | Black  | Small  |
            // | Dog     | Male   | 3   | Kodak   | White  | Large  |


            // // Delcares the pet
            // var sadie = new Pet();
            // // Initializes the properties one at a time
            // sadie.Color = "Blonde";
            // sadie.Gender = "Female";
            // sadie.Name = "Sadie";
            // sadie.Species = "Dog";
            // sadie.Age = 1;
            // sadie.Size = "Medium";

            // // Delcare *AND* initialize the pet in one step
            // var russell = new Pet()
            // {
            //     Age = 3,
            //     Color = "Black",
            //     Name = "Russell",
            //     Species = "Cat",
            //     Gender = "Male",
            //     Size = "Small"
            // };
            // var kodak = new Pet()
            // {
            //     Name = "Kodak",
            //     Gender = "Male",
            //     Species = "Dog",
            //     Age = 3,
            //     Color = "White",
            //     Size = "Large",
            // };
            // var pets = new List<Pet>() { sadie, russell, kodak };

            var pets = new List<Pet>() {
               new Pet()
               {
                   Color = "Blonde",
                   Gender = "Female",
                   Name = "Sadie",
                   Species = "Dog",
                   Age = 1,
                   Size = "Medium",
               },
               new Pet()
               {
                  Age = 3,
                  Color = "Black",
                  Name = "Russell",
                  Species = "Cat",
                  Gender = "Male",
                  Size = "Small"
               },
               new Pet()
               {
                  Name = "Kodak",
                  Gender = "Male",
                  Species = "Dog",
                  Age = 3,
                  Color = "White",
                  Size = "Large",
               }
            };

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

                //     - See all the pets up for adoption
                if (choice == "SEE")
                {

                    // SEE - See all the pets
                    //
                    // Problem - we want to see all pets
                    // E - See the PEDAC for Examples
                    // D - List of pets
                    // A - 
                    //     for every pet in our collection of pets, do the following:
                    foreach (var pet in pets)
                    {
                        //       console writeline the pet's name, age, species, gender, color, and size
                        Console.WriteLine($"{pet.Name} is a {pet.Age} year old {pet.Gender} {pet.Species} that is {pet.Color} and {pet.Size}");
                    }
                }


                //     - Add a new pet
                if (choice == "ADD")
                {
                    // A
                    //
                    // Ask the name
                    Console.Write("What is the name? ");
                    var newPetName = Console.ReadLine();

                    // Ask the gender
                    Console.Write("What is the gender? ");
                    var newPetGender = Console.ReadLine();

                    // Ask the species
                    Console.Write("What is the species? ");
                    var newPetSpecies = Console.ReadLine();

                    // Ask the age
                    Console.Write("What is the age? ");
                    var newPetAgeString = Console.ReadLine();
                    var newPetAge = int.Parse(newPetAgeString);

                    // Ask the size
                    Console.Write("What is the size? ");
                    var newPetSize = Console.ReadLine();

                    // Ask the color
                    Console.Write("What is the color? ");
                    var newPetColor = Console.ReadLine();

                    // Make new Pet object filling in all the properties
                    // var newPet = new Pet();
                    // newPet.Name = newPetName;
                    // newPet.Gender = newPetGender;
                    // newPet.Species = newPetSpecies;
                    // newPet.Age = newPetAge;
                    // newPet.Color = newPetColor;
                    // newPet.Size = newPetSize;
                    var newPet = new Pet()
                    {
                        Name = newPetName,
                        Gender = newPetGender,
                        Species = newPetSpecies,
                        Age = newPetAge,
                        Color = newPetColor,
                        Size = newPetSize,
                    };
                    // Add that pet to the list of pets
                    pets.Add(newPet);
                }

                //     - Input a name of a pet that has been adopted to remove them from the list
                if (choice == "ADOPT")
                {
                    // Algorithm
                    //
                    //
                    // ReadLine the name of the pet to adopt - call this "nameOfPet"
                    Console.Write("What is the name? ");
                    var nameOfPet = Console.ReadLine();

                    // Using the name of the pet, find any pet object in our list that has the same name
                    //
                    var foundPet = pets.Find(pet => pet.Name == nameOfPet);

                    // Show the user the details of the pet and ask for confirmation. "Are you sure?"
                    // Console.WriteLine, Console.Readline, if statements...

                    // Remove the pet from the list of pets
                    pets.Remove(foundPet);
                }


                //     - Input a name of a pet and update their size

                //     - Quit the applications
                //          if the user's choice is "QUIT", set the boolean to true
                if (choice == "QUIT")
                {
                    userHasChosenToQuit = true;
                }
            }


            // Say goodbye
            BannerMessage("Goodbye");
        }
    }
}
