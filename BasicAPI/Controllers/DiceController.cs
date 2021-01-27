using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace BasicAPI.Controllers
{
    // The [controller] is a shorthand
    // for the name of the controller
    // but without the word Controller
    // [Route("api/Dice")]
    [Route("api/[controller]")]
    // This tells C# that the HelloWorldController
    // is a magical controller and can speak
    // to the internet.
    [ApiController]
    public class DiceController : ControllerBase
    {
        [HttpGet("{numberOfSides}")]
        // int sides -- comes from {sides} in the HttpGet
        // int count -- comes from a query parameter
        public List<int> Roll(int numberOfSides, int count = 1)
        {
            // Make a new list to store our integer rolls
            var rolls = new List<int>();

            // Make a random number generator
            var randomNumberGenerator = new Random();

            // Loop _count_ times
            for (var rollNumber = 0; rollNumber < count; rollNumber++)
            {
                // Grab a random roll between 1 and sides
                var roll = randomNumberGenerator.Next(numberOfSides) + 1;

                // Add that roll to the list
                rolls.Add(roll);
            }

            // Return the list
            return rolls;
        }
    }
}