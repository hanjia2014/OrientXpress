using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace OrientXpress.Models
{
    public class OXDataContext : IdentityDbContext
    {
        // Account tables
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        //public DbSet<Administrator> Administrators { get; set; }
        public DbSet<Musician> Musicians { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Music> Musics { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Video> Videos { get; set; }
        public DbSet<Events> Events { get; set; }

        public OXDataContext() : base("DefaultConnection")
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<OXDataContext>());
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        }

        public static OXDataContext Create()
        {
            return new OXDataContext();
        }
    }
}