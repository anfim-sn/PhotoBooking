using PhotoBooking.API.Data;

namespace PhotoBooking.API.Core.DTO;

public class BookingRequest
{
  public string Name { get; set; }
  public string Phone { get; set; }
  public string Email { get; set; }
  public int Room { get; set; }
  public bool Equipment { get; set; }
  public bool Stylist { get; set; }
  public bool Props { get; set; }
  public bool Models { get; set; }
  public string From { get; set; }
  public string To { get; set; }
  public string Payment { get; set; }
  public bool Spam { get; set; }

  public Booking ToBooking()
  {
    try
    {
      var booking = new Booking
      {
        Id = Guid.NewGuid(),
        Name = Name,
        Phone = Phone,
        Email = Email,
        Room = Room,
        Equipment = Equipment,
        Stylist = Stylist,
        Props = Props,
        Models = Models,
        From = DateTime.Parse(From),
        To = DateTime.Parse(To),
        Payment = Payment,
        Spam = Spam
      };
      return booking;
    }
    catch (Exception e)
    {
      Console.WriteLine(e);
      throw new ArgumentException(e.Message);
    }
  }

  public override string ToString()
  {
    return
      $"Name: {Name}\nEmail: {Email}\nPhone: {Phone}\nRoom: {Room}\nFrom: {From}\nTo: {To}\nPayment:{Payment}\nSpam: {Spam}";
  }
}
