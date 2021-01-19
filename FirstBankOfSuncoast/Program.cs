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

        static int Balance(List<Transaction> transactionList, string whichAccountType)
        {


            //            condition ? VALUE FOR TRUE : VALUE FOR FALSE
            // var answer = transactionList.Count > 10 ? 42 : -42;



            // Filter out all of the transactions for that type (Checking or Savings)
            // var foundTransactions = transactionList.Where(transaction => transaction.Account == whichAccountType);

            // // Total up the deposits
            // var depositTotalInOneStep = foundTransactions
            //                                       .Where(transaction => transaction.Type == "Deposit")
            //                                       .Sum(transaction => transaction.Amount);

            // // Total up the withdraw
            // var withdrawTotalInOneStep = foundTransactions.
            //                                       Where(transaction => transaction.Type == "Withdraw").
            //                                       Sum(transaction => transaction.Amount);
            // Subtract them
            // return depositTotalInOneStep - withdrawTotalInOneStep;

            return transactionList.
                     Where(transaction => transaction.Account == whichAccountType).
                     Sum(transaction => transaction.Type == "Deposit" ? +transaction.Amount : -transaction.Amount);
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
                        var accountType = PromptForString("Which account, Savings or Checking? ");
                        if (accountType == "Savings" || accountType == "Checking")
                        {
                            var amount = PromptForInteger("How much to deposit? ");

                            var newTransaction = new Transaction
                            {
                                Type = "Deposit",
                                Account = accountType,
                                Amount = amount,
                                TimeStamp = DateTime.Now
                            };

                            transactions.Add(newTransaction);
                        }
                        break;

                    case "WITHDRAW":
                        var accountTypeForWithdraw = PromptForString("Which account, Savings or Checking? ");
                        if (accountTypeForWithdraw == "Savings" || accountTypeForWithdraw == "Checking")
                        {
                            var amount = PromptForInteger("How much to withdraw? ");

                            // If we aren't drawing more than we have (less than or equal)
                            // AND the amount input is more than 0 dollars (withdrawing 0 doesn't make sense and don't allow negatives)
                            if (amount > 0 && amount <= Balance(transactions, accountTypeForWithdraw))
                            {
                                var newTransaction = new Transaction
                                {
                                    Type = "Withdraw",
                                    Account = accountTypeForWithdraw,
                                    Amount = amount,
                                    TimeStamp = DateTime.Now
                                };

                                transactions.Add(newTransaction);
                            }
                            else
                            {
                                Console.WriteLine("Insufficient Funds!");
                            }
                        }
                        break;

                    case "TRANSFER":
                        // Make a withdraw
                        // Make a deposit
                        // Add both to the list
                        break;

                    case "BALANCE":
                        var checkingBalance = Balance(transactions, "Checking");
                        var savingsBalance = Balance(transactions, "Savings");

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
