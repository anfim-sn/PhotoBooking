using PhotoBooking.API.Data;

namespace PhotoBooking.API.Core.Contracts;

public interface IBookingRepository
{
  Task<Booking> GetBooking(int id);
  Task<List<Booking>> GetAllBookings();
  Task<List<Booking>> SearchBooking(string searchString);
  Task AddBooking(Booking booking);
}
