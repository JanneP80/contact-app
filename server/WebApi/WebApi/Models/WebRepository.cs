using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class WebRepository : IWebRepository
    {
        private readonly WebContext _context;

        public WebRepository(WebContext context)
        {
            _context = context;
            Add(new WebItem { firstName = "vesa" });
            Add(new WebItem { lastName = "heimo" });
            Add(new WebItem { phone = "012345" });
            Add(new WebItem { address = "katu" });
            Add(new WebItem { city = "fingerpori" });
        }

        public IEnumerable<WebItem> GetAll()
        {
            return _context.WebItems.ToList();
        }

        public void Add(WebItem item)
        {
            _context.WebItems.Add(item);
            _context.SaveChanges();
        }

        public WebItem Find(long key)
        {
            return _context.WebItems.FirstOrDefault(t => t.Key == key);
        }

        public void Remove(long key)
        {
            var entity = _context.WebItems.First(t => t.Key == key);
            _context.WebItems.Remove(entity);
            _context.SaveChanges();
        }

        public void Update(WebItem item)
        {
            _context.WebItems.Update(item);
            _context.SaveChanges();
        }
    }
}
