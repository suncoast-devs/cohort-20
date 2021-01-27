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
    }
}
