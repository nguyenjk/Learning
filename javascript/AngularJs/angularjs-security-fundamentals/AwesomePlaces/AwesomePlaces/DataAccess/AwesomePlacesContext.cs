using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using AwesomePlaces.Models;

namespace AwesomePlaces.DataAccess
{
  public class AwesomePlacesContext : DbContext
  {
    public AwesomePlacesContext()
      : base("DefaultConnection")
    {
    }

    public DbSet<AwesomePlace> AwesomePlaces { get; set; }
    public DbSet<Country> Countries { get; set; }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
      modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
    }
  }
}