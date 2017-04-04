using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/[controller]")]

    public class WebController : Controller
    {
        private readonly IWebRepository _webRepository;

        public WebController(IWebRepository webRepository)
        {
            _webRepository = webRepository;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<WebItem> Get()
        {
            //return new string[] { "value1", "value2" };
            return _webRepository.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetWeb")]
        public IActionResult GetById(long id)
        {
            var item = _webRepository.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        /*
                public string Get(int id)
                {
                    return "value";
                }
                */

        // POST api/values
        [HttpPost]
        public IActionResult Create([FromBody] WebItem item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _webRepository.Add(item);

            return CreatedAtRoute("Get Web Contact", new {id = item.Key}, item);
        }
        
        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] WebItem item)
        {
            if (item == null || item.Key != id)
            {
                return BadRequest();
            }

            var web = _webRepository.Find(id);
            if (web == null)
            {
                return NotFound();
            }

            // web.Key = item.Key;
            web.firstName = item.firstName;
            web.lastName = item.lastName;
            web.phone = item.phone;
            web.address = item.address;
            web.city = item.city;

            _webRepository.Update(web);
            return new NoContentResult();
        }

        
            // DELETE api/values/5
            [HttpDelete("{id}")]
            public IActionResult Delete(long id)
            {
            var web = _webRepository.Find(id);
            if (web == null)
            {
                return NotFound();
            }

            _webRepository.Remove(id);
            return new NoContentResult();
        }
            
    }
}
