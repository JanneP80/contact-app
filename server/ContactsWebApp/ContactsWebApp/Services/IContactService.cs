
using System.Collections.Generic;

using ContactsWebApp.Models;

namespace ContactsWebApp.Services
{
    public interface IContactService
    {
        List<Contact> FindAllContacts();
        Contact FindContactById(int id);
        void CreateContact(Contact contact);
        void UpdateContact(Contact contact);
        void DeleteContact(int id);
    }
}
