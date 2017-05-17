﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApp.Config;
using ContactsWebApp.Controllers.Communication;
using ContactsWebApp.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ContactsWebApp.Controllers
{
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
            if (user == null) return null; // TODO fixit
            var token = TokenBuilder.Build(user);
            return new JsonResult(new AuthResponse(user.Id.ToString(), token));
        }
    
        /*
        public IActionResult Unauthorized()
        {
            return Authenticate();
            // return Mess;
        }
        */
    }
}