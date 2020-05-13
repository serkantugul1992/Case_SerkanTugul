using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Case_ST_API.Entities
{
    public class Menu:IEntity
    {
        public int Id { get; set; }
        public string MenuName { get; set; }
        public string Explanation { get; set; }
    }
}
