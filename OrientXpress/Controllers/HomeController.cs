using OrientXpress.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace OrientXpress.Controllers
{
    public class HomeController : Controller
    {
        private OXDataContext db = new OXDataContext();

        public List<Event> Events
        {
            get
            {
                var events = new List<Event>();
                foreach(var eve in db.Events)
                {
                    events.Add(new Event { Id = eve.Id, Content = eve.Content, Date = eve.Date, Title = eve.Title });
                }

                return events;
            }
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}