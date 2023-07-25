using Microsoft.AspNetCore.Mvc;

namespace TwitterShowcase.Controllers
{
    public class TwitterController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
