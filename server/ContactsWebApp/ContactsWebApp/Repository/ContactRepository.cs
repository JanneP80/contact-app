using System;
using System.Collections.Generic;
using System.Linq;
using ContactsWebApp.Models;

namespace ContactsWebApp.Repository
{
    public class ContactRepository: IContactRepository
    {
        private readonly ContactsContext _context;

        public ContactRepository(ContactsContext context)
        {
            _context = context;
        }

        public List<Contact> FindAll()
        {
            var contacts = _context.Contacts.ToList();
            return contacts;
        }

        public Contact FindById(int id)
        {
            var contact = _context.Contacts.FirstOrDefault(c => c.Id == id);
            return contact;
        }

        public void Create(Contact contact)
        {
            _context.Contacts.Add(contact);
            _context.SaveChanges();
        }

        public void Update(Contact contact)
        {
            _context.Contacts.Update(contact);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var contact = _context.Contacts.FirstOrDefault(c => c.Id == id);
            if (contact != null)
            {
                _context.Contacts.Remove(contact);
                _context.SaveChanges();
            }
            else
            {
                // TODO something
                Console.WriteLine("#ContactRepository, No contact found for id " + id);
            }
        }
    }
}
