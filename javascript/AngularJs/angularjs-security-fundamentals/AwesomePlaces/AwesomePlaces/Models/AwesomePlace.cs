using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace AwesomePlaces.Models
{
  public class AwesomePlace
  {
    private readonly ApplicationUserManager _userManager;
    public AwesomePlace()
    {
      _userManager = HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>();
    }

    public int Id { get; set; }

    [Required]
    public string PlaceName { get; set; }

    [Required]
    public string Description { get; set; }

    public virtual Country Country { get; set; }

    public int CountryId { get; set; }

    public int UserId { get; set; }

    [NotMapped]
    public string UserName
    {
      get
      {
        var user = _userManager.FindById(UserId);
        return user == null ? "Unknown" : user.Name;
      }
    }

    [NotMapped]
    public string UserEmail
    {
      get
      {
        var user = _userManager.FindById(UserId);
        return user.UserName;
      }
    }

    [Required]
    public DateTime CreateDate { get; set; }
  }
}