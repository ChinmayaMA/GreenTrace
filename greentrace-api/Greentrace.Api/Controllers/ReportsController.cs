using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Greentrace.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Greentrace.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReportsController : Controller
    {
        private static readonly List<Report> Reports = new();

        [HttpGet]
        public IActionResult GetAll() => Ok(Reports);

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var report = Reports.FirstOrDefault(r => r.Id == id);
            if (report == null) return NotFound();
            return Ok(report);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Report report)
        {
            report.Id = Reports.Count + 1;
            report.CreatedAt = DateTime.UtcNow;
            Reports.Add(report);

            return CreatedAtAction(nameof(GetById), new { id = report.Id }, report);
        }

        [HttpGet("by-company/{companyId}")]
        public IActionResult GetByCompany(int companyId)
        {
            var companyReports = Reports.Where(r => r.CompanyId == companyId).ToList();
            return Ok(companyReports);
        }
        

    }
}