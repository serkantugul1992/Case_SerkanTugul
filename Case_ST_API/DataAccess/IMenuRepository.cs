using Case_ST_API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Case_ST_API.DataAccess
{
    public interface IMenuRepository
    {
        bool SaveAll();
        List<Menu> GetMenus();
    }
}
