using System;

namespace FirstBankOfSuncoast
{
    class Transaction
    {
        // -- Amount (int): (how much is in the transaction)
        public int Amount { get; set; }
        // -- Type (string - boolean TRUE if Deposit, FALSE if Withdraw): Deposit, Withdraw 
        public string Type { get; set; }
        // -- TimeStamp (DateTime) 
        public DateTime TimeStamp { get; set; }
        // -- Account (string - boolean TRUE if Checking, FALSE if Savings): Checking, Savings
        public string Account { get; set; }
    }


    class Program
    {
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
            var userHasChosenToQuit = false;
            while (userHasChosenToQuit == false)
            {
                Console.WriteLine("Menu Options:");
                Console.WriteLine();
                Console.WriteLine("Deposit");
                Console.WriteLine("Withdraw");
                Console.WriteLine("Transfer");
                Console.WriteLine("Balance");
                Console.WriteLine("History");
                Console.WriteLine("Quit");

                var choice = PromptForString("Choice: ").ToUpper().Trim();
                switch (choice)
                {
                    case "DEPOSIT":
                        break;

                    case "WITHDRAW":
                        break;

                    case "TRANSFER":
                        break;

                    case "BALANCE":
                        break;

                    case "HISTORY":
                        break;

                    case "QUIT":
                        userHasChosenToQuit = true;
                        break;
                }
            }
        }
    }
}
