
using ContactsWebApp.Config;
using ContactsWebApp.Controllers.Communication;
using ContactsWebApp.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore.Migrations;

namespace ContactsWebApp.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/authentication")]
    public class AuthenticationController
    {
        private readonly IUserService _userService;

        public AuthenticationController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] AuthRequest authRequest)
        {
            var user = _userService.FindUserByUsernameAndPassword(authRequest.Username, authRequest.Password);
            // if (user == null) return Unauthorized();
            if (user == null) return new UnauthorizedResult(); // TODO fixit Unauthorized()
            var token = TokenBuilder.Build(user);
            return new JsonResult(new AuthResponse(user.Id.ToString(), token));
        }
    
    }
}
