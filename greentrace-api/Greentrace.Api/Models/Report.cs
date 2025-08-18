using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Greentrace.Api.Models
{
    public class Report
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public string Type { get; set; } = string.Empty; // ex: "Production", "Export"
        public DateTime SubmittedAt { get; set; }
        public double CarbonEmissions { get; set; } // In tons CO2e
    }
}