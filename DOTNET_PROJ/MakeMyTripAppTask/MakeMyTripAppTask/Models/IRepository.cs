namespace MakeMyTripAppTask.Models
{
    public interface IRepository
    {
        public MakeMyTripApp AddMakeMyTripApp(MakeMyTripApp MakeMyTripApp);
        public MakeMyTripApp UpdateMakeMyTripApp(MakeMyTripApp MakeMyTripApp);
        public void DeleteMakeMyTripApp(int id);
        public IEnumerable<MakeMyTripApp> MakeMyTripApp { get; }
        public MakeMyTripApp this[int id] { get; }
    }
}