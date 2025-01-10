
//using Makemytripapp.Models;?
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System.Collections.Generic;
using System.Reflection.Emit;
using WebApiDemo.Models;

//namespace Makemytrip.Models
namespace WebApiDemo.Models
{
    public class ReservationDbContext : DbContext
    {


        public ReservationDbContext(DbContextOptions<ReservationDbContext> options) : base(options) { }
        //public DbSet<Information> Information { get; set; }

        public DbSet<Reservation> Reservations { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
        }
    }
}
