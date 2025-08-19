using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Greentrace.Api.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string Industry { get; set; } = string.Empty;
    }
}