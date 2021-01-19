using System;
using System.Collections.Generic;
using System.Linq;

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

        public string Description()
        {
            var transactionDescription = $"On {TimeStamp}: ${Amount} {Type} to/from {Account}";
            return transactionDescription;
        }
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
            var transactions = new List<Transaction>()
            {
                // | Deposit  | Savings  | 20     |
                new Transaction {
                    Type = "Deposit",
                    Amount = 20,
                    Account = "Savings",
                    TimeStamp = DateTime.Now
                },
                // | Deposit  | Savings  | 2000   |
                new Transaction {
                    Type = "Deposit",
                    Amount = 2000,
                    Account = "Savings",
                    TimeStamp = DateTime.Now
                },

                // | Deposit  | Checking | 3000   |
                new Transaction {
                    Type = "Deposit",
                    Amount = 3000,
                    Account = "Checking",
                    TimeStamp = DateTime.Now
                },
                // | Withdraw | Checking | 42     |
                new Transaction {
                    Type = "Withdraw",
                    Amount = 42,
                    Account = "Checking",
                    TimeStamp = DateTime.Now
                },
            };


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
                        var checkingBalance = 0;
                        var savingsBalance = 0;

                        // This list ONLY has transactions that are savings
                        var savingsTransactions = transactions.Where(transaction => transaction.Account == "Savings");
                        foreach (var transaction in savingsTransactions)
                        {
                            if (transaction.Type == "Deposit")
                            {
                                savingsBalance += transaction.Amount;
                            }
                            else
                            {
                                savingsBalance -= transaction.Amount;
                            }
                        }

                        var checkingTransactions = transactions.Where(transaction => transaction.Account == "Checking");
                        foreach (var transaction in checkingTransactions)
                        {
                            if (transaction.Type == "Deposit")
                            {
                                checkingBalance += transaction.Amount;
                            }
                            else
                            {
                                checkingBalance -= transaction.Amount;
                            }
                        }


                        Console.WriteLine($"Your checking balance is {checkingBalance}");
                        Console.WriteLine($"Your savings balance is {savingsBalance}");
                        break;

                    case "HISTORY":
                        var transactionInOrder = transactions.OrderBy(transaction => transaction.TimeStamp);
                        foreach (var transaction in transactionInOrder)
                        {
                            Console.WriteLine(transaction.Description());
                        }
                        break;

                    case "QUIT":
                        userHasChosenToQuit = true;
                        break;
                }
            }
        }
    }
}
