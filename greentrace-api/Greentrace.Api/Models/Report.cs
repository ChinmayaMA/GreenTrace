using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Greentrace.Api.Models
{
    public class Report
    {
        public int Id { get; set; }

        [Required]
        public int CompanyId { get; set; }

        [Required, StringLength(50)]
        public string ReportType { get; set; } = string.Empty; 
        // e.g., "Production", "Export"

        [Required]
        public string Data { get; set; } = string.Empty; 
        // For MVP: JSON string. Later: structured schema.

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}