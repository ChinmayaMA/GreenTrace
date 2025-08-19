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
        private static readonly List<Company> Companies = new();

        [HttpGet]
        public IActionResult GetAll() => Ok(Companies);

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var company = Companies.FirstOrDefault(c => c.Id == id);
            if (company == null) return NotFound();
            return Ok(company);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Company company)
        {
            company.Id = Companies.Count + 1;
            company.CreatedAt = DateTime.UtcNow;
            Companies.Add(company);

            return CreatedAtAction(nameof(GetById), new { id = company.Id }, company);
        }

    }
}