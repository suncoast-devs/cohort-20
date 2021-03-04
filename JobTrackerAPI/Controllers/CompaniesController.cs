using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JobTrackerAPI.Models;

namespace JobTrackerAPI.Controllers
{
    // All of these routes will be at the base URL:     /api/Companies
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case CompaniesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that receives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public CompaniesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Companies
        //
        // Returns a list of all your Companies
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Company>>> GetCompanies()
        {
            // Uses the database context in `_context` to request all of the Companies, sort
            // them by row id and return them as a JSON array.
            return await _context.Companies.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/Companies/5
        //
        // Fetches and returns a specific company by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Company>> GetCompany(int id)
        {
            // Find the company in the database using `FindAsync` to look it up by id
            var company = await _context.Companies.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (company == null)
            {
                // Return a `404` response to the client indicating we could not find a company with this id
                return NotFound();
            }

            // Return the company as a JSON object.
            return company;
        }

        // PUT: api/Companies/5
        //
        // Update an individual company with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Company
        // variable named company. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Company POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompany(int id, Company company)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != company.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in company to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from company
            _context.Entry(company).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!CompanyExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(company);
        }

        // POST: api/Companies
        //
        // Creates a new company in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Company
        // variable named company. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Company POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Company>> PostCompany(Company company)
        {
            // Indicate to the database context we want to add this new record
            _context.Companies.Add(company);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetCompany", new { id = company.Id }, company);
        }

        // DELETE: api/Companies/5
        //
        // Deletes an individual company with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompany(int id)
        {
            // Find this company by looking for the specific id
            var company = await _context.Companies.FindAsync(id);
            if (company == null)
            {
                // There wasn't a company with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Companies.Remove(company);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(company);
        }

        // Private helper method that looks up an existing company by the supplied id
        private bool CompanyExists(int id)
        {
            return _context.Companies.Any(company => company.Id == id);
        }
    }
}
