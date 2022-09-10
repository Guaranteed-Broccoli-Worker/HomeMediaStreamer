using MediaStreamer.Data.DAL;
using MediaStreamer.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace MediaStreamer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public readonly DataContext _Context;

        public UsersController(DataContext context)
        {
            _Context = context;
        }

        [HttpGet]
        public IEnumerable<UsersModel> Get()
        {
            return _Context.Users.Select(x => new UsersModel
            {
                FirstName = x.FirstName,
                LastName = x.LastName,
                CreatedDate = x.CreatedDate,
                Deleted = x.Deleted,
                ID = x.ID,
                LastLogin = x.LastLogin,
                Password = x.Password,
                Username = x.Username,
            }).ToArray();
        }
    }
}
