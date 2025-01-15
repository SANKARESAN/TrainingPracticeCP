namespace Proj_Demo.Models
{
    public class Attendance
    {
        public int EmpId { get; set; }
        public string EmpName { get; set; } = null!;

        public TimeOnly? InTime { get; set; }
        public TimeOnly? OutTIme { get; set; }
        public object OutTime { get; internal set; }
    }
}
