using EFCore.Models;
using EFCore;
using Microsoft.EntityFrameworkCore;
using EFCore.Data;


namespace EFCore                                          
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddRazorPages();

            builder.Services.AddDbContext<EFCoreDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("EFCoreDbContext")));
            builder.Services.AddDatabaseDeveloperPageExceptionFilter();


            var app = builder.Build();

            
            
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Error");
                
                app.UseHsts();
            }
            else
            {
                app.UseDeveloperExceptionPage();
                app.UseMigrationsEndPoint();
            }

            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                var context = services.GetRequiredService<EFCoreDbContext>();
                context.Database.EnsureCreated();
                //DbInitializer.Initialize(context);
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapRazorPages();

            app.Run();
        }
    }
}