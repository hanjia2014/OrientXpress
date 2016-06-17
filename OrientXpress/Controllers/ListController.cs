using OrientXpress.Models;
using System.Linq;
using System.Web.Http;

namespace OrientXpress.Controllers
{
    public class ListController : ApiController
    {
        private OXDataContext db = new OXDataContext();
        // GET api/<controller>
        public IQueryable<string> Get()
        {
            return db.Events.Select(p => p.Title);
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}