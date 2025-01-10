using MakeMyTripAppTask.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace MakeMyTripAppTask.Models
{
    public class MakeMyTripAppContext : DbContext
    {


        public MakeMyTripAppContext(DbContextOptions<MakeMyTripAppContext> options) : base(options) { }
        //public DbSet<Information> Information { get; set; }

        public DbSet<Reservation> Department { get; set; }
        public IEnumerable<Reservation> Reservations { get; internal set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
        }
    }
}