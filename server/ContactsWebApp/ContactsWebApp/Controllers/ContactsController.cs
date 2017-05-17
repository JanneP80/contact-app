using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApp.Services;
using Microsoft.AspNetCore.Mvc;
using ContactsWebApp.Models;
using Microsoft.AspNetCore.Cors;


namespace ContactsWebApp.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/contacts")]
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

        //private readonly IContactService _contactService;
        /*
        private static ContactService _contactService = new ContactService();


        // Get "api/contacts"
        [HttpGet]
        public List<Contact> Get()
        {
            return _contactService.FindContacts();
        }

        // Get "api/contacts/<id>"
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return _contactService.FindContactById(id);
        }

        // Post "api/contacts/"
        [HttpPost]
        public void Post([FromBody]Contact contact)
        {
            _contactService.CreateNewContact(contact);
        }

        // Post "api/contacts/<id>"
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Contact contact)
        {
            _contactService.UpdateContact(id, contact);
        }

        // Delete "api/contacts/<id>"
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _contactService.DeleteContact(id);
        }
        */
    }
}
