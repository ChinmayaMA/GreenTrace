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
        private readonly ILogger<ReportsController> _logger;
        private static readonly List<Report> _reports = new List<Report>();

        public ReportsController(ILogger<ReportsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult GetReports()
        {
            return Ok(_reports);
        }
        [HttpPost]
        public IActionResult AddReport([FromBody] Report report)
        {
            report.Id = _reports.Count > 0 ? _reports.Max(r => r.Id) + 1 : 1;
            report.SubmittedOn = DateTime.UtcNow;
            _reports.Add(report);
            return CreatedAtAction(nameof(GetReports), new { id = report.Id }, report);
        }
        [HttpGet("{id}")]
        public IActionResult GetReportById(int id)
        {
            var report = _reports.FirstOrDefault(r => r.Id == id);
            if (report == null)
            {
                return NotFound();
            }
            return Ok(report);
        }

    }
}