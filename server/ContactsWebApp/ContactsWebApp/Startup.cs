using System;
using ContactsWebApp.Config;
using ContactsWebApp.Repository;
using ContactsWebApp.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;

namespace ContactsWebApp
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            

            // Add Injections 
            services.AddScoped<IContactService, ContactService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IContactRepository, ContactRepository>();

            // Enable cross-origin requests and allow all origins/methods/headers/credentials used
            // Configure cors service here and init in x file or in Configure
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        // .AllowCredentials()
                        );
            });

            // Configure authorization 
            services.AddAuthorization(auth =>
            {
                auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
                    .RequireAuthenticatedUser()
                    .Build());
            });

            // Configure database
            services.AddDbContext<ContactsContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DatabaseConnection")));

            // Has to be the last one to call
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors("CorsPolicy");

            // Authentification init
            app.UseJwtBearerAuthentication(new JwtBearerOptions()
            {
                TokenValidationParameters = new TokenValidationParameters()
                {
                    // IssuerSigningKey = new RsaSecurityKey(RSA.Create()),
                    IssuerSigningKey = TokenOptions.Key,
                    // ValidAudience = "ekoodi-audience",
                    ValidAudience = TokenOptions.Audience,

                    // The signing key must match
                    ValidateIssuerSigningKey = true,

                    // Validate the JWT Issuer (iss) claim
                    // ValidIssuer = "ekoodi-issuer",
                    ValidIssuer = TokenOptions.Issuer,

                    // Validate the token expiry
                    ValidateLifetime = true,

                    ClockSkew = TimeSpan.FromMinutes(0)
                }
            });

            

            // Database initialization
            var context = app.ApplicationServices.GetService<ContactsContext>();
            if (context.Database.EnsureCreated())
            {
                context.Database.Migrate();
            }

            // Has to be the last one to call
            app.UseMvc();

        }
        
    }
}
