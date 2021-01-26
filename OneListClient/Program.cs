﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace OneListClient
{
    class Item
    {
        public int id { get; set; }
        public string text { get; set; }
        public bool complete { get; set; }
        public string created_at { get; set; }
        public string updated_at { get; set; }
    }



    class Program
    {
        static async Task Main(string[] args)
        {
            var client = new HttpClient();

            // Make a `GET` request to the API and get back a *stream* of data.
            var responseAsStream = await client.GetStreamAsync("https://one-list-api.herokuapp.com/items?access_token=illustriousvoyage");

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
        }
    }
}
