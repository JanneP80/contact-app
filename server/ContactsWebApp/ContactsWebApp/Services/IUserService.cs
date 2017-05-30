
using ContactsWebApp.Models;

namespace ContactsWebApp.Services
{
    public interface IUserService
    {
        User FindUserByUsername(string username);
        User FindUserByUsernameAndPassword(string username, string password);
    }
}
