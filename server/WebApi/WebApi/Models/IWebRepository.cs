using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public interface IWebRepository
    {
        void Add(WebItem item);
        IEnumerable<WebItem> GetAll();
        WebItem Find(long key);
        void Remove(long key);
        void Update(WebItem item);
    }
}
