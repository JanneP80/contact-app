﻿
using System.Collections.Generic;

using ContactsWebApp.Models;

namespace ContactsWebApp.Repository
{
    public interface IContactRepository
    {
        List<Contact> FindAll();
        Contact FindById(int id);
        void Create(Contact contact);
        void Update(Contact contact);
        void Delete(int id);
    }
}
