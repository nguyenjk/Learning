using System.Collections.Generic;
using System.Web.Http;
using AwesomePlaces.Models;

namespace AwesomePlaces.Controllers
{
  public class AdminController : ApiController
  {
    [Route("api/admin/users")]
    [HttpGet]
    public IEnumerable<ApplicationUser> Users()
    {
      return new ApplicationDbContext().Users;
    }
  }
}