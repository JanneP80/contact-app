using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class WebContext : DbContext
    {
        public WebContext(DbContextOptions<WebContext> options)
            : base(options)
        {
        }

        public DbSet<WebItem> WebItems { get; set; }
    }
}
