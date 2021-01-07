using System;

namespace Methods
{
    class Employee
    {
        public string Name { get; set; }
        public int Department { get; set; }
        public int Salary { get; set; }
        public int MonthlySalary { get; set; }
    }

    class Program
    {
        // New Methods Go Here!!!!

        // static method (ignore this for the moment)
        //  |
        //  |  The return (output) type. Here there is none
        //  |  since the method isn't giving anything back
        //  |  to the code that called it.
        //  |   |
        //  |   |               The inputs, known as arguments. None in this case.
        //  |   |                   |
        //  |   |                   |
        //  v   v                   v
        static void DisplayGreeting()
        {
            //
            //    Body of the method
            //      |
            //      |
            //      v
            Console.WriteLine("--------------------------------");
            Console.WriteLine("Welcome to Our Employee Database");
            Console.WriteLine("--------------------------------");
            Console.WriteLine();
            Console.WriteLine();
        }

        static string PromptForString(string prompt)
        {
            Console.Write(prompt);

            var userInput = Console.ReadLine();

            return userInput;
        }

        static int PromptForInteger(string prompt)
        {
            Console.Write(prompt);

            var userInput = Console.ReadLine();

            var userInputAsNumber = int.Parse(userInput);

            return userInputAsNumber;
        }

        static void Main(string[] args)
        {
            DisplayGreeting();

            var name = PromptForString("What is your name? ");

            var favoriteColor = PromptForString("What is your favorite color? ");

            var department = PromptForInteger("What is your department number? ");

            var salary = PromptForInteger("What is your yearly salary (in dollars?) ");

            var salaryPerMonth = salary / 12;

            // Longer method of creating and setting initial object values
            //
            // var newEmployee = new Employee();
            // newEmployee.Name = name;
            // newEmployee.Department = department;
            // newEmployee.Salary = salary;
            // newEmployee.MonthlySalary = salaryPerMonth;

            var newEmployee = new Employee
            {
                Name = name,
                Department = department,
                Salary = salary,
                MonthlySalary = salaryPerMonth
            };

            Console.WriteLine($"Hello, {name} you make {salaryPerMonth} a month.");
        }
    }
}
