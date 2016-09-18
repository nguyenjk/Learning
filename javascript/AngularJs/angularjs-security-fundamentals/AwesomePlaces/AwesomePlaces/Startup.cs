using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AwesomePlaces.Startup))]
namespace AwesomePlaces
{
  public partial class Startup
  {
    public void Configuration(IAppBuilder app)
    {
      ConfigureAuth(app);
    }
  }
}
