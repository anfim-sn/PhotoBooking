using Microsoft.EntityFrameworkCore;
using PhotoBooking.API.Core.Contracts;
using PhotoBooking.API.Data;

namespace PhotoBooking.API.Core.Repository;

public class BookingRepository : IBookingRepository
{
  private readonly PhotoBookingDbContext _context;

  public BookingRepository(PhotoBookingDbContext context)
  {
    _context = context;
  }

  public async Task AddBooking(Booking booking)
  {
    await _context.Bookings.AddAsync(booking);
    await _context.SaveChangesAsync();
  }

  public async Task<List<Booking>> GetAllBookings()
  {
    var bookings = await _context.Bookings.ToListAsync();
    return bookings;
  }

  public async Task<Booking> GetBooking(int id)
  {
    var booking = await _context.Bookings.FindAsync(id);
    if (booking == null)
      throw new ArgumentException("No key Provided");

    return booking;
  }

  public async Task<List<Booking>> SearchBooking(string searchString)
  {
    return await _context.Bookings
      .Where(b => b.Name.ToLower().Contains(searchString))
      .ToListAsync();
  }
}
