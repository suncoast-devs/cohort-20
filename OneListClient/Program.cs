﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using ConsoleTables;

namespace OneListClient
{
    class Item
    {
        // Teaching the serializer that the JSON property is called lowercase id
        // Even though our C# property is named Id
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("text")]
        public string Text { get; set; }

        [JsonPropertyName("complete")]
        public bool Complete { get; set; }

        [JsonPropertyName("created_at")]
        public DateTime CreatedAt { get; set; }

        [JsonPropertyName("update_at")]
        public DateTime UpdatedAt { get; set; }

        public string CompletedStatus
        {
            get
            {
                // string completedStatusText;

                // if (complete)
                // {
                //     completedStatusText = "completed";
                // }
                // else
                // {
                //     completedStatusText = "not completed";
                // }

                // Ternary
                // string completedStatusText = complete ? "completed" : "not completed";

                return Complete ? "completed" : "not completed";
            }
        }
    }



    class Program
    {
        static async Task ShowAllItems(string tokenToSendToApi)
        {
            var client = new HttpClient();

            // Make a `GET` request to the API and get back a *stream* of data.
            var responseAsStream = await client.GetStreamAsync($"https://one-list-api.herokuapp.com/items?access_token={tokenToSendToApi}");

            // Supply that *stream of data* to a Deserialize that will interpret it as a List of Item objects.
            //
            //                                                                   stream of data from api
            //
            //                                                       We want to get it back as a List of Item objects
            //
            //                                      Deserialize (turn a stream into a List)
            //
            //                       The Data is JSON
            List<Item> items = await JsonSerializer.DeserializeAsync<List<Item>>(responseAsStream);

            Console.WriteLine($"There are {items.Count()} todo items");

            var table = new ConsoleTable("Id", "Description", "Created At", "Completed");

            foreach (var item in items)
            {
                // Add one row to our table
                table.AddRow(item.Id, item.Text, item.CreatedAt, item.CompletedStatus);
            }

            table.Write();
        }

        static async Task GetOneItemAsync(string tokenToSendToApi, int idToLookup)
        {
            try
            {
                var client = new HttpClient();

                // Make a `GET` request to the API and get back a *stream* of data.
                var responseAsStream = await client.GetStreamAsync($"https://one-list-api.herokuapp.com/items/{idToLookup}?access_token={tokenToSendToApi}");

                Item item = await JsonSerializer.DeserializeAsync<Item>(responseAsStream);

                var table = new ConsoleTable("ID", "Description", "Created At", "Updated At", "Completed");

                // Add one row to our table
                table.AddRow(item.Id, item.Text, item.CreatedAt, item.UpdatedAt, item.CompletedStatus);

                // Write the table
                table.Write(Format.Minimal);
            }
            catch (HttpRequestException)
            {
                Console.WriteLine("I could not find that item!");
            }
        }


        static async Task AddOneItemAsync(string tokenToSendToApi, Item newItemToAdd)
        {
            var client = new HttpClient();

            // Generate a URL specifically referencing the endpoint for getting a single
            // todo item and provide the id we were supplied
            var url = $"https://one-list-api.herokuapp.com/items?access_token={tokenToSendToApi}";

            // Take the `newItem` and serialize it into JSON
            string jsonBody = JsonSerializer.Serialize(newItemToAdd);

            // We turn this into a StringContent object and indicate we are using JSON
            // by ensuring there is a media type header of `application/json`
            StringContent jsonBodyAsContent = new StringContent(jsonBody);
            jsonBodyAsContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");

            var response = await client.PostAsync(url, jsonBodyAsContent);


            // Get the response as a stream.
            var responseJson = await response.Content.ReadAsStreamAsync();

            // Supply that *stream of data* to a Deserialize that will interpret it as a *SINGLE* `Item`
            var item = await JsonSerializer.DeserializeAsync<Item>(responseJson);

            // Make a table to output our new item.
            var table = new ConsoleTable("ID", "Description", "Created At", "Updated At", "Completed");

            // Add one row to our table
            table.AddRow(item.Id, item.Text, item.CreatedAt, item.UpdatedAt, item.CompletedStatus);

            // Write the table
            table.Write(Format.Minimal);

        }


        static async Task Main(string[] args)
        {
            // The token string will be the first "word" that appears after "dotnet run" on the command line
            string token = "";

            if (args.Length == 0)
            {
                Console.Write("What list would you like? ");
                token = Console.ReadLine();
            }
            else
            {
                token = args[0];
            }

            var keepGoing = true;
            while (keepGoing)
            {
                Console.Clear();
                Console.Write("Get (A)ll todo, or Get (O)ne todo, (C)reate a new item, or (Q)uit: ");
                var choice = Console.ReadLine().ToUpper();

                switch (choice)
                {
                    case "Q":
                        keepGoing = false;
                        break;

                    case "A":
                        await ShowAllItems(token);
                        Console.WriteLine("Press ENTER to continue");
                        Console.ReadLine();

                        break;

                    case "O":
                        Console.Write("Enter the ID of the item to show: ");
                        var id = int.Parse(Console.ReadLine());

                        await GetOneItemAsync(token, id);

                        Console.WriteLine("Press ENTER to continue");
                        Console.ReadLine();
                        break;

                    case "C":
                        Console.Write("Enter the description of your new todo: ");
                        var text = Console.ReadLine();

                        var newItem = new Item
                        {
                            Text = text
                        };

                        await AddOneItemAsync(token, newItem);

                        Console.WriteLine("Press ENTER to continue");
                        Console.ReadLine();
                        break;


                }
            }
        }
    }
}
