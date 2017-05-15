using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApp.Models;

namespace ContactsWebApp.Repository
{
    public class IContactRepository
    {
        List<Contact> FindAll();
        Contact FindById(int id);
        void Create(Contact contact);
        void Update(Contact contact);
        void Delete(int id);
    }
}
