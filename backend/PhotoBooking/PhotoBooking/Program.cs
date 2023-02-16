using Microsoft.EntityFrameworkCore;
using PhotoBooking.API.Core.Contracts;
using PhotoBooking.API.Core.Middleware;
using PhotoBooking.API.Core.Repository;
using PhotoBooking.API.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString =
  builder.Configuration.GetConnectionString("PhotoBookingDb");
var myAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(
  options =>
  {
    options.AddPolicy(
      myAllowSpecificOrigins,
      policy => { policy.WithOrigins("http://localhost:3000"); }
    );
  }
);

builder.Services.AddDbContext<PhotoBookingDbContext>(
  option => option.UseInMemoryDatabase(connectionString)
);

builder.Services.AddScoped<IBookingRepository, BookingRepository>();

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseMiddleware<ExceptionMiddleware>();
app.UseCors(myAllowSpecificOrigins);
app.MapControllers();

app.Run();
