using MakeMyTripAppTask.Models;
using Microsoft.AspNetCore.Mvc;

namespace MakeMyTripAppTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MakeMyTripAppController : ControllerBase
    {
        private IRepository repository;
        public MakeMyTripAppController(IRepository rep)
        {
            repository = rep;
        }



        [HttpGet]
        public IEnumerable<MakeMyTripApp> Get() => repository.MakeMyTripApp;

        [HttpGet("{id}")]
        public ActionResult<MakeMyTripApp> Get(int id)
        {
            if (id == 0)
            {
                return BadRequest("Value must be passed in the request body");
            }
            return Ok(repository[id]);
        }


        [HttpPost]
        public MakeMyTripApp Post([FromBody] MakeMyTripApp res) =>
            repository.AddMakeMyTripApp(new MakeMyTripApp
            {
                id = res.id,
                name = res.name,
                startlocation = res.startlocation,
                endlocation = res.endlocation
            });


        [HttpPut]
        public MakeMyTripApp Put([FromForm] MakeMyTripApp res) =>
            repository.UpdateMakeMyTripApp(res);


        [HttpDelete("{id}")]
        public void Delete(int id) =>
            repository.DeleteMakeMyTripApp(id);









    }
}
