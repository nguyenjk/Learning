using System.Linq;
using System.Web.Mvc;
using AwesomePlaces.DataAccess;

namespace AwesomePlaces.Controllers
{
  public class SearchController : Controller
  {
    private readonly AwesomePlacesContext _db = new AwesomePlacesContext();

    public ActionResult Index(string searchTerm)
    {
      ViewBag.SearchTerm = searchTerm;

      if (string.IsNullOrEmpty(searchTerm))
      {
        return View();
      }

      var result = _db.AwesomePlaces.Include("Country").Where(a => a.PlaceName.Contains(searchTerm) || a.Description.Contains(searchTerm));
      return View(result);
    }
  }
}