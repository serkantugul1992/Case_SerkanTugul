using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Case_ST_API.DataAccess;
using Case_ST_API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Case_ST_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MainController : Controller
    {

        private IMenuRepository _menuRepository;

        public MainController(IMenuRepository menuRepository)
        {
            _menuRepository = menuRepository;

        }

        [HttpGet("GetMenus")]
        public IActionResult GetMenus()
        {
            IEnumerable<Menu> list = _menuRepository.GetMenus();
            return Ok(list);
        }


        // GET api/values
        [HttpGet("Deneme")]
        public int Deneme()
        {
            return 1;
        }
    }
}