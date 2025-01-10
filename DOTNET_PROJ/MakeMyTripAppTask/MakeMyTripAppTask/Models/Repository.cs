using MakeMyTripApp.Models;
using MakeMyTripAppTask.Models;

namespace MakeMyTripApp.Models
{
    public class Repository : IRepository
    {
        private MakeMyTripAppContext context;

        public Repository(MakeMyTripAppContext context)
        {
            this.context = context;

            new List<Reservation>() {
                new Reservation() {Id = 1, Name= "Rio", StartLocation="Chennai", EndLocation="Trichy" },
                //new Reservation() {Id = 2, Name= "Ram", StartLocation="Kanayakumari", EndLocation="Chennai" },
                //new Reservation() {Id = 3, Name= "Sam", StartLocation="Tanjore", EndLocation="madurai" },
                //new Reservation() {Id = 4, Name= "Prem", StartLocation="Madurai", EndLocation="Karur" },
            }.ForEach(r => AddReservation(r));
        }

        public Reservation this[int id] => getReservation(id);

        private Reservation getReservation(int id)
        {
            foreach (Reservation res in context.Reservations)
            {
                if (res.Id == id) return res;
            }
            return null;
        }

        public IEnumerable<Reservation> Reservations => context.Reservations;



        public Reservation AddReservation(Reservation reservation)
        {
            //if (reservation.Id == 0)
            //{
            //    int key = context.Reservations.Count();
            //    foreach (Reservation res in context.Reservations)
            //    {
            //        if (res.Id == reservation.Id)
            //        {
            //            key++;
            //        }
            //        else
            //            break;
            //    }
            //    reservation.Id = key;
            //}
            ADDandSAVE(reservation);
            return reservation;
        }

        public async void ADDandSAVE(Reservation reservation)
        {
            context.Department.Add(reservation);
            //context.Entry(reservation).State = Microsoft.EntityFrameworkCore.EntityState.Added;
            await context.SaveChangesAsync();
        }


        public void DeleteReservation(int id)
        {
            foreach (Reservation res in context.Reservations)
            {
                if (res.Id == id)
                {
                    context.Department.Remove(res);
                }
            }
        }

        public Reservation UpdateReservation(Reservation reservation)
        {
            return AddReservation(reservation);
        }
    }
}