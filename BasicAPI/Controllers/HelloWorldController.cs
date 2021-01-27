using System;
using Microsoft.AspNetCore.Mvc;

namespace BasicAPI.Controllers
{
    // The [controller] is a shorthand
    // for the name of the controller
    // but without the word Controller
    // [Route("api/HelloWorld")]
    [Route("api/[controller]")]
    // This tells C# that the HelloWorldController
    // is a magical controller and can speak
    // to the internet.
    [ApiController]
    public class HelloWorldController : ControllerBase
    {
        //
        //            This method name can be anything we like, should be meaningful
        [HttpGet]
        public string TacoTuesdayTheNameHereDoesntMatter(string who)
        {
            string whoOrWorld;

            if (who == null)
            {
                whoOrWorld = "World";
            }
            else
            {
                whoOrWorld = who;
            }

            return $"Hello, {whoOrWorld}. This is my first API! The time is {DateTime.Now}";
        }
    }
}
