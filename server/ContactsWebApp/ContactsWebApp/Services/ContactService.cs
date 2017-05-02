﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApp.Models;

namespace ContactsWebApp.Services
{
    public class ContactService
    {
        private List<Contact> _contacts;

        public ContactService()
        {
            _contacts = new List<Contact>();
            _contacts.Add(new Contact(1, "Mörkö", "Pötkö", "000555345", "Karankokatu 3", "Lappeenranta"));

        }

        public List<Contact> FindContacts()
        {
            return _contacts;
        }

        public Contact FindContactById(int id)
        {
            return _contacts.FirstOrDefault(contact => contact.Id == id);
        }

        private int GetId()
        {
            var lastSaved = _contacts.OrderByDescending(contact => contact.Id).FirstOrDefault();
            if (lastSaved != null)
            {
                return lastSaved.Id + 1;
            }
            else
            {
                return 0;
            }
        }

        public void CreateNewContact(Contact contact)
        {
            _contacts.Add(new Contact(
                GetId(),
                contact.FirstName,
                contact.LastName,
                contact.Phone,
                contact.Address,
                contact.City));
        }

        public void UpdateContact(int id, Contact contact)
        {
            var index = _contacts.FindIndex(cont => cont.Id == id);
            _contacts[index] = contact;
        }

        public void DeleteContact(int id)
        {
            /*
            var entity = _contacts.First(contact => contact.Id == id);
            _contacts.Remove(entity);
            */
            _contacts.RemoveAll(cont => cont.Id == id);
        }
    }
}