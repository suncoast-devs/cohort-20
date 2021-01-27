using System;
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
        public int Roll(int numberOfSides)
        {
             // Make a random number generator
            var randomNumberGenerator = new Random();

            // Next(sides) would make a number between 0 and just less than sides
            // so return that number plus one. Making the range from 1 to a number
            // INCLUDING the value of sides.
            var roll = randomNumberGenerator.Next(numberOfSides) + 1;

            return roll;
        }
    }
}