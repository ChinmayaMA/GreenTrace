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
    public class CompaniesController : Controller
    {
        private static readonly List<Company> _companies = new();
        private readonly ILogger<CompaniesController> _logger;

        public CompaniesController(ILogger<CompaniesController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public IActionResult GetCompanies()
        {
            return Ok(_companies);
        }
        [HttpGet("{id}")]
        public IActionResult GetCompanyById(int id)
        {
            var company = _companies.FirstOrDefault(c => c.Id == id);
            if (company == null)
            {
                return NotFound();
            }
            return Ok(company);
        }
        [HttpPost]
        public IActionResult AddCompany([FromBody] Company company)
        {
            if (company.Id == 0)
                company.Id = _companies.Count + 1;
            _companies.Add(company);
            return CreatedAtAction(nameof(GetCompanyById),new { id = company.Id }, company);
        }
    }
}