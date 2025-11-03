using backend.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ILogger<ContactController> _logger;

        public ContactController(ILogger<ContactController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Post([FromBody] ContactDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: integrate with email service (SendGrid/SMTP) or store in DB
            _logger.LogInformation("Contact form submitted: {Name} <{Email}>: {Message}", dto.Name, dto.Email, dto.Message);

            return Accepted(new { status = "received" });
        }
    }
}
