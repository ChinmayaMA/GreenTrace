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
        public string CompanyName { get; set; } = string.Empty;
        public string ReportType { get; set; } = string.Empty; // ex: "Production", "Export"
        public DateTime SubmittedOn { get; set; }
        // public double CarbonEmissions { get; set; } // In tons CO2e
        public string FileUrl { get; set; } = string.Empty; // URL to the report file
    }
}