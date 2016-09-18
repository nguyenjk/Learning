using System.Web.Mvc;

namespace AwesomePlaces.Controllers
{
  public class HomeController : Controller
  {
    public ActionResult Index()
    {
      return View();
    }
  }
}