using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using CsvHelper;

namespace NumberTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = new List<int>();

            bool hasQuit = false;
            while (hasQuit == false)
            {
                Console.WriteLine();
                // Print out our numbers on one line seperated by spaces
                Console.WriteLine(String.Join(" ", numbers));

                Console.Write("What is a number you'd like to track? (blank to quit) ");
                var numberString = Console.ReadLine().Trim();
                if (numberString == "")
                {
                    hasQuit = true;
                }
                else
                {
                    var number = int.Parse(numberString);

                    numbers.Add(number);
                }
            }

            // We get here when the user has quit.

            // TIME TO WRITE THE FILE!

            // Make our file writing stream
            var fileWriter = new StreamWriter("numbers.csv");

            //                  A new stream of CSV data
            //                  |
            //                  |         The stream to write to
            //                  |         |
            //                  |         |           Rules about formatting
            //                  |         |           |
            //                  |         |           |
            //                  v         v           v
            var csvWriter = new CsvWriter(fileWriter, CultureInfo.InvariantCulture);

            //
            //  Where to write as CSV
            //  |
            //  |                     What data to write
            //  |                     |
            //  v                     v
            csvWriter.WriteRecords(numbers);

            //
            //  Tell the object that writes to the file
            //  |
            //  |         That we are done and close
            //  |         |
            //  v         v
            fileWriter.Close();


        }
    }
}
