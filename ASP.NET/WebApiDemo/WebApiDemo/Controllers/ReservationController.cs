using Microsoft.AspNetCore.Mvc;
using WebApiDemo.Models;

namespace WebApiDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReservationController : ControllerBase
    {
        private IRepository repository;

        public ReservationController(IRepository repos) => repository = repos;

        [HttpGet]
        public IEnumerable<Reservation> Get() => repository.Reservations;

        [HttpGet("{id}")]

        public ActionResult<Reservation> Get(int id)
        {
            if (id == 0)
                return BadRequest("value must be passed in the request body");
            return Ok(repository[id]);
        }

        [HttpPost]

        public Reservation Post([FromBody] Reservation res) =>
            repository.AddReservation(new Reservation
            {
                Id = res.Id,
                Name = res.Name,
                StartLocation = res.StartLocation,
                EndLocation = res.EndLocation
            });

        [HttpPut]
        public Reservation Put([FromForm] Reservation res) => repository.UpdateReservation(res);


        [HttpDelete("{id}")]

        public void Delete(int id) => repository.DeleteReservation(id);
    }
}
