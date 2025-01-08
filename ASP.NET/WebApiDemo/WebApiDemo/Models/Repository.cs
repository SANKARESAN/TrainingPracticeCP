namespace WebApiDemo.Models
{

    public class Repository : IRepository
    {
        private Dictionary<int, Reservation> items;

        public Repository()
        {
            items = new Dictionary<int, Reservation>();
            new List<Reservation>
            {
                new Reservation{Id=1,Name="Sam",StartLocation="kanyakumari",EndLocation="Chennai"},
                new Reservation{Id=2,Name="Sankaresh",StartLocation="Thanjavur",EndLocation="kanyakumari"},
                new Reservation{Id=3,Name="Leo",StartLocation="Kashmir",EndLocation="Delhi"},
                new Reservation{Id=4,Name="Das",StartLocation="Coimbatore",EndLocation="Pondicherry"},
            }.ForEach(r => AddReservation(r));
        }
        public Reservation this[int id] => items.ContainsKey(id) ? items[id] : null;

        public IEnumerable<Reservation> Reservations => items.Values;

        public Reservation AddReservation(Reservation reservation)
        {
            if (reservation.Id == 0)
            {
                int key = items.Count;
                while (items.ContainsKey(key))
                {
                    key++;
                }
                reservation.Id = key;
            }

            items[reservation.Id] = reservation;
            return reservation;
        }

        public void DeleteReservation(int id)
        {
            items.Remove(id);
        }

        public Reservation UpdateReservation(Reservation reservation)
        {
            return AddReservation(reservation);
        }
    }

}
