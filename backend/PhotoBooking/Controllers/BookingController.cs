using Microsoft.AspNetCore.Mvc;
using PhotoBooking.API.Core.Contracts;
using PhotoBooking.API.Core.DTO;
using PhotoBooking.API.Data;

namespace PhotoBooking.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BookingController : ControllerBase
{
  private readonly IBookingRepository _repository;

  public BookingController(IBookingRepository repository)
  {
    _repository = repository;
  }

  // GET: api/booking?search=
  [HttpGet]
  public async Task<ActionResult<IEnumerable<Booking>>> GetBookingList(
    [FromQuery(Name = "search")] string? search
  )
  {
    if (search == null) return await _repository.GetAllBookings();

    return await _repository.SearchBooking(search);
  }

  // POST api/booking
  [HttpPost]
  public async Task<ActionResult<string>> Post(
    [FromBody] BookingRequest bookingRequest
  )
  {
    await _repository.AddBooking(bookingRequest.ToBooking());

    return Ok(new JsonResult("Booking added"));
  }
}
