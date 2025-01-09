
using MakeMyTripAppTask.Models;

namespace MakeMyTripAppTask.Models
{
    public class Repository : IRepository
    {
        private MakeMyTripAppContext context;

        public Repository(MakeMyTripAppContext context)
        {
            this.context = context;

            new List<MakeMyTripApp>() {
                new MakeMyTripApp() {id = 1, name= "Rio", startlocation="Chennai", endlocation="Thanjavur" },
                //new Reservation() {Id = 2, Name= "Ajay", StartLocation="Kanayakumari", EndLocation="Mumbai" },
                //new Reservation() {Id = 3, Name= "Manoj", StartLocation="Chennai", EndLocation="madurai" },
                //new Reservation() {Id = 4, Name= "Sanjay", StartLocation="Chennai", EndLocation="Thiruchi" },
            }.ForEach(r => AddMakeMyTripApp(r));
        }

        public MakeMyTripApp this[int id] => getMakeMyTripApp(id);

        private MakeMyTripApp getMakeMyTripApp(int id)
        {
            foreach (MakeMyTripApp res in context.MakeMyTripApp)
            {
                if (res.id == id) return res;
            }
            return null;
        }

        public IEnumerable<MakeMyTripApp> MakeMyTripApp => context.MakeMyTripApp;

        public object Context { get; private set; }

        public MakeMyTripApp AddMakeMyTripApp(MakeMyTripApp MakeMyTripApp)
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
            ADDandSAVE(MakeMyTripApp);
            return MakeMyTripApp;
        }

        public async void ADDandSAVE(MakeMyTripApp MakeMyTripApp)
        {
            Context.MakeMyTrip.Add(MakeMyTripApp);
            //context.Entry(reservation).State = Microsoft.EntityFrameworkCore.EntityState.Added;
            await context.SaveChangesAsync();
        }


        public void DeleteMakeMyTripApp(int id)
        {
            foreach (MakeMyTripApp res in context.MakeMyTripApp)
            {
                if (res.id == id)
                {
                    context.MakeMyTripApp.Remove(res);
                }
            }
        }

        public MakeMyTripApp UpdateMakeMyTripApp(MakeMyTripApp MakeMyTripApp)
        {
            return AddMakeMyTripApp(MakeMyTripApp);
        }
    }
}
