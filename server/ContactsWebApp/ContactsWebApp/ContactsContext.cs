
using Microsoft.EntityFrameworkCore;
using ContactsWebApp.Models;

namespace ContactsWebApp
{
  
    public class ContactsContext : DbContext
    {
        public ContactsContext(DbContextOptions<ContactsContext> options)
            : base(options){
        }
        
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<User> User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().ToTable("Contact");
            modelBuilder.Entity<User>().ToTable("User");
        }
    }
   
}
