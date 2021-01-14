using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using CsvHelper;

namespace NumberTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            // This object will *READ* from our numbers.csv
            var fileReader = new StreamReader("numbers.csv");

            // This object will *READ* CSV information _FROM_ the fileReader
            var csvReader = new CsvReader(fileReader, CultureInfo.InvariantCulture);

            // Tell the reader not to interpret the first
            // row as a "header" since it is just the
            // first number.
            csvReader.Configuration.HasHeaderRecord = false;

            // ask
            //            CSV Reader
            //            |
            //            |         Get all the data
            //            |         |
            //            |         |          as integers
            //            |         |          |
            //            |         |          |      and as a list
            var numbers = csvReader.GetRecords<int>().ToList();

            // Close the file to say we are done reading information
            fileReader.Close();

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
