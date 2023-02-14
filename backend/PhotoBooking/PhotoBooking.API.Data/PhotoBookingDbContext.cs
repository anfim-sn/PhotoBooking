using Microsoft.EntityFrameworkCore;

namespace PhotoBooking.API.Data;

public class PhotoBookingDbContext : DbContext
{
  public PhotoBookingDbContext(DbContextOptions options) : base(options) { }

  public DbSet<Booking> Bookings { get; set; }
}
