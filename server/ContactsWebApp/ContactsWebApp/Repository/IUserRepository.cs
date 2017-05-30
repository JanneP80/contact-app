﻿
using ContactsWebApp.Models;

namespace ContactsWebApp.Repository
{
    public interface IUserRepository
    {
        User FindByUsername(string username);
        User FindByUsernameAndPassword(string username, string password);
    }
}
