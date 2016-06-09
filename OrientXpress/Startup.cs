using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(OrientXpress.Startup))]
namespace OrientXpress
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
