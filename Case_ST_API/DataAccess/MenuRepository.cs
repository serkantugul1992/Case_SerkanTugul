using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Case_ST_API.Entities;

namespace Case_ST_API.DataAccess
{
    public class MenuRepository : IMenuRepository
    {
        private DataContext _context;

        public MenuRepository(DataContext context)
        {
            _context = context;
        }

        public List<Menu> GetMenus()
        {
            return _context.Menus.ToList();
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
