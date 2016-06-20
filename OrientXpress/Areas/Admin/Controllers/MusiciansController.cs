using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using OrientXpress.Models;
using System.Web;
using System.IO;

namespace OrientXpress.Areas.Admin.Controllers
{
    [Authorize]
    public class MusiciansController : Controller
    {
        private OXDataContext db = new OXDataContext();

        // GET: Admin/Musicians
        public ActionResult Index()
        {
            return View(db.Musicians.ToList());
        }

        // GET: Admin/Musicians/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Musician musician = db.Musicians.Find(id);
            if (musician == null)
            {
                return HttpNotFound();
            }
            return View(musician);
        }

        // GET: Admin/Musicians/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Admin/Musicians/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Title,FirstName,LastName,Description,Image")] Musician musician)
        {
            if (ModelState.IsValid)
            {
                db.Musicians.Add(musician);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(musician);
        }

        // GET: Admin/Musicians/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Musician musician = db.Musicians.Find(id);
            if (musician == null)
            {
                return HttpNotFound();
            }
            return View(musician);
        }

        // POST: Admin/Musicians/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Musician musician, HttpPostedFileBase imageFile)
        {
            if (ModelState.IsValid)
            {
                if (imageFile != null && imageFile.ContentLength > 0)
                {
                    var target = new MemoryStream();
                    imageFile.InputStream.CopyTo(target);
                    byte[] data = target.ToArray();
                    musician.Image = data;
                }

                db.Entry(musician).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(musician);
        }

        // GET: Admin/Musicians/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Musician musician = db.Musicians.Find(id);
            if (musician == null)
            {
                return HttpNotFound();
            }
            return View(musician);
        }

        // POST: Admin/Musicians/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Musician musician = db.Musicians.Find(id);
            db.Musicians.Remove(musician);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
