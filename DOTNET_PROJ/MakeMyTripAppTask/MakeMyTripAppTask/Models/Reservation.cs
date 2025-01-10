namespace MakeMyTripAppTask.Models
{
    public class Reservation
    {
        public int Id { set; get; } = 0;
        public string Name { set; get; }
        public string StartLocation { set; get; }
        public string EndLocation { set; get; } = string.Empty;
    }
}