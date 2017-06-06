
using System.Collections.Generic;
using ContactsWebApp.Services;
using Microsoft.AspNetCore.Mvc;
using ContactsWebApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;


namespace ContactsWebApp.Controllers
{
    // [EnableCors("CorsPolicy")]
    [Route("api/contacts")]
    [Authorize("Bearer")]
    public class ContactsController : Controller
    {
        private readonly IContactService _contactService;
        

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        // Get "api/contacts"
        [HttpGet]
        public List<Contact> Get()
        {
            return _contactService.FindAllContacts();
        }

        // Get "api/contacts/<id>"
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return _contactService.FindContactById(id);
        }

        // Post "api/contacts/"
        [HttpPost]
        public void Create([FromBody]Contact contact)
        {
            _contactService.CreateContact(contact);
        }

        // Post "api/contacts/<id>"
        [HttpPut("{id}")]
        public void Update(int id, [FromBody]Contact contact)
        {
            _contactService.UpdateContact(contact);
        }

        // Delete "api/contacts/<id>"
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _contactService.DeleteContact(id);
        }
        
    }
}
