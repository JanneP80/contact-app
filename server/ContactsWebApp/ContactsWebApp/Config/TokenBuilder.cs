﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using ContactsWebApp.Models;
using Microsoft.IdentityModel.Tokens;

namespace ContactsWebApp.Config
{
    public class TokenBuilder
    {
        public static string Build(User user)
        {
            var handler = new JwtSecurityTokenHandler();
            var expires = DateTime.Now + TokenOptions.ExpiresSpan;

            var identity = new ClaimsIdentity(
                new GenericIdentity(user.Username, "TokenAuth"),
                new[] { new Claim("ID", user.Id.ToString()) }
            );

            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = TokenOptions.Issuer,
                Audience = TokenOptions.Audience,
                SigningCredentials = TokenOptions.SigningCredentials,
                Subject = identity,
                Expires = expires
            });
            return handler.WriteToken(securityToken);
        }
    }
}
