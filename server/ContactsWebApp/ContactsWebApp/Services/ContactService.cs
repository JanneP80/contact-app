﻿
using System.Collections.Generic;
using ContactsWebApp.Models;
using ContactsWebApp.Repository;

namespace ContactsWebApp.Services
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        public List<Contact> FindAllContacts()
        {
            return _contactRepository.FindAll();
        }

        public Contact FindContactById(int id)
        {
            return _contactRepository.FindById(id);
        }

        public void CreateContact(Contact contact)
        {
            _contactRepository.Create(contact);
        }

        public void UpdateContact(Contact contact)
        {
            _contactRepository.Update(contact);
        }

        public void DeleteContact(int id)
        {
            _contactRepository.Delete(id);
        }
        
    }
}
