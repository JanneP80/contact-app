﻿
using System.Linq;
using ContactsWebApp.Models;

namespace ContactsWebApp.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ContactsContext _context;

        public UserRepository(ContactsContext context)
        {
            _context = context;
            var user = new User("admin", "admin", "Admin", "Admin", "admin.admin@saimia.fi");
            if (FindByUsername(user.Username) == null)
            {
                _context.User.Add(user);
                _context.SaveChanges();
            }
        }

        public User FindByUsername(string username)
        {
            return _context.User.FirstOrDefault(u => u.Username == username);
        }

        public User FindByUsernameAndPassword(string username, string password)
        {
            return _context.User.FirstOrDefault(u => u.Username == username && u.Password == password);
        }
    }
}
