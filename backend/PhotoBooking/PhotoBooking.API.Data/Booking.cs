using System.ComponentModel.DataAnnotations;

namespace PhotoBooking.API.Data;

public class Booking
{
  [Key]
  public Guid Id { get; set; }

  [MaxLength(20)]
  public string Name { get; set; }

  [Required]
  [EmailAddress]
  public string Email { get; set; }

  [Required]
  [Phone]
  public string Phone { get; set; }

  [Required]
  public int Room { get; set; }

  public bool Equipment { get; set; }
  public bool Stylist { get; set; }
  public bool Props { get; set; }
  public bool Models { get; set; }

  [Required]
  public DateTime From { get; set; }

  [Required]
  public DateTime To { get; set; }

  [Required]
  public string Payment { get; set; }

  public bool Spam { get; set; }
}
