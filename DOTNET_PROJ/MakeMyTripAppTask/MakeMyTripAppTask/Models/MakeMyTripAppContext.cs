using Microsoft.EntityFrameworkCore;

namespace MakeMyTripAppTask.Models
{
    public class MakeMyTripAppContext : DbContext
    {
        public IEnumerable<MakeMyTripApp> MakeMyTripApp { get; internal set; }
    }
}
