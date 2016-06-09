namespace OrientXpress.Migrations
{
    using Models;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<OXDataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(OXDataContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //var musicians = new List<Musician> { new Musician { FirstName = "Jia", LastName = "Han" },
            //  new Musician { FirstName = "Alice", LastName = "Qiao" },
            //  new Musician { FirstName = "Mike", LastName = "Bain" }};
            //context.Musicians.AddRange(musicians);
            //context.SaveChanges();
            //
        }
    }
}
