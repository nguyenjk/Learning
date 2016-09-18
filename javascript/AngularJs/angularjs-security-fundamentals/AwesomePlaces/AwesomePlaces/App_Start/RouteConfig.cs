using System.Web.Mvc;
using System.Web.Routing;

namespace AwesomePlaces
{
  public class RouteConfig
  {
    public static void RegisterRoutes(RouteCollection routes)
    {
      routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
      routes.MapRoute("Search", "Search", new { controller = "Search", action = "Index" });
      routes.MapRoute("Default", "{*url}", new { controller = "Home", action = "Index" });
    }
  }
}
