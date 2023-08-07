using EFCore.Models;
using EFCore.Data;

namespace EFCore.Data
{
    public static class DbInitializer
    {
        public static void Initialize(EFCoreDbContext context)
        {
            
            if (context.Products.Any())
            {
                return;   // DB has been seeded
            }

            var customers = new Customer[]
            {
                new Customer{Id=1, FirstName="Carson",LastName="Alexander"},
                new Customer{Id=2, FirstName="Meredith",LastName="Alonso"},
                new Customer{Id=3, FirstName="Arturo",LastName="Anand"},
                new Customer{Id=4, FirstName="Gytis",LastName="Barzdukas" },
                new Customer{Id=5, FirstName="Yan",LastName="Li"},
            };

            context.Customer.AddRange(customers);
            context.SaveChanges();

            var products = new Product[]
            {
                new Product{Id=234, Name="iPhone 12", Price=799},
                new Product{Id=198, Name="Samsung Galaxy S21", Price=899},
                new Product{Id=562, Name="Dell XPS 13", Price=1299},
                new Product{Id=102, Name="Sony WH-1000XM4", Price=349},
                new Product{Id=243, Name="Nintendo Switch", Price=299},
            };

            context.Products.AddRange(products);
            context.SaveChanges();

            var categories = new Category[]
            {
                new Category{Id=1000,Name="Console" },
                new Category{Id=1001,Name="Mobile Phone" },
                new Category{Id=1002,Name="Laptop"},
                new Category{Id=1003,Name="Headphones"},
                
            };

            context.Categories.AddRange(categories);
            context.SaveChanges();
        }

      }
} 