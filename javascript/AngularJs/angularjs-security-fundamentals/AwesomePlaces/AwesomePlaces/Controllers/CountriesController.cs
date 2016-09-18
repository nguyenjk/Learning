using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using AwesomePlaces.DataAccess;
using AwesomePlaces.Models;

namespace AwesomePlaces.Controllers
{
  public class CountriesController : ApiController
  {
    private readonly AwesomePlacesContext _db = new AwesomePlacesContext();

    public IEnumerable<Country> Get()
    {
      return _db.Countries.OrderBy(c => c.Name);
    }
  }
}
