﻿using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace AwesomePlaces.Models
{
  public class ApplicationUser : IdentityUser<int, CustomUserLogin, CustomUserRole, CustomUserClaim>
  {
    public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser, int> manager, string authenticationType)
    {
      var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
      return userIdentity;
    }

    public string Name { get; set; }
  }

  public class ApplicationDbContext : IdentityDbContext<ApplicationUser, CustomRole, int, CustomUserLogin, CustomUserRole, CustomUserClaim>
  {
    public ApplicationDbContext()
      : base("DefaultConnection")
    {
    }

    public static ApplicationDbContext Create()
    {
      return new ApplicationDbContext();
    }
  }

  public class CustomUserRole : IdentityUserRole<int> { }
  public class CustomUserClaim : IdentityUserClaim<int> { }
  public class CustomUserLogin : IdentityUserLogin<int> { }

  public class CustomRole : IdentityRole<int, CustomUserRole>
  {
    public CustomRole() { }
    public CustomRole(string name) { Name = name; }
  }

  public class CustomUserStore : UserStore<ApplicationUser, CustomRole, int, CustomUserLogin, CustomUserRole, CustomUserClaim>
  {
    public CustomUserStore(ApplicationDbContext context)
      : base(context)
    {
    }
  }

  public class CustomRoleStore : RoleStore<CustomRole, int, CustomUserRole>
  {
    public CustomRoleStore(ApplicationDbContext context)
      : base(context)
    {
    }
  }
}