using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Greentrace.Api.Models
{
    public class Company
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Company name is required.")]
        [StringLength(100, ErrorMessage = "Company name cannot exceed 100 characters.")]
        public string Name { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        [Required(ErrorMessage = "Industry is required.")]
        public string Industry { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}