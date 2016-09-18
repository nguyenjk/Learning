﻿using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace AwesomePlaces
{
  public class MvcApplication : HttpApplication
  {
    protected void Application_Start()
    {
      AreaRegistration.RegisterAllAreas();
      GlobalConfiguration.Configure(WebApiConfig.Register);
      FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
      RouteConfig.RegisterRoutes(RouteTable.Routes);

      GlobalConfiguration.Configuration.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
    }
  }
}
