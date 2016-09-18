using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using AwesomePlaces.DataAccess;
using AwesomePlaces.Models;
using Microsoft.AspNet.Identity;

namespace AwesomePlaces.Controllers
{
  public class AwesomePlacesController : ApiController
  {
    private readonly AwesomePlacesContext _db = new AwesomePlacesContext();

    public IEnumerable<AwesomePlace> Get()
    {
      return _db.AwesomePlaces.Include("Country").OrderByDescending(a => a.Id);
    }

    [Authorize]
    public HttpResponseMessage Post([FromBody]AwesomePlace awesomePlace)
    {
      var userId = Convert.ToInt32(HttpContext.Current.User.Identity.GetUserId());

      awesomePlace.UserId = userId;
      awesomePlace.CreateDate = DateTime.Now;

      _db.AwesomePlaces.Add(awesomePlace);
      _db.SaveChanges();

      awesomePlace.Country = _db.Countries.Single(c => c.Id == awesomePlace.CountryId);

      return Request.CreateResponse(HttpStatusCode.Created, awesomePlace);
    }

    [Authorize]
    public AwesomePlace Put([FromBody]AwesomePlace awesomePlace)
    {
      _db.AwesomePlaces.Attach(awesomePlace);
      var entry = _db.Entry(awesomePlace);
      entry.Property(e => e.CountryId).IsModified = true;
      entry.Property(e => e.PlaceName).IsModified = true;
      entry.Property(e => e.Description).IsModified = true;
      _db.SaveChanges();

      return new AwesomePlacesContext().AwesomePlaces.Include("Country").Single(a => a.Id == awesomePlace.Id);
    }

    protected override void Dispose(bool disposing)
    {
      if (disposing)
      {
        _db.Dispose();
      }

      base.Dispose(disposing);
    }
  }
}
