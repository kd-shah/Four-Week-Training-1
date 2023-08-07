using Microsoft.EntityFrameworkCore;
using BookStore.Models;

using Microsoft.EntityFrameworkCore;
namespace BookStore
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            //builder.Services.AddDbContext<BookContext>(options =>
            //options.UseSqlServer(builder.Configuration.GetConnectionString("BookContext")));

            builder.Services.AddDbContext<BookContext>(opt =>
            opt.UseInMemoryDatabase("BookList"));

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/error");
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}