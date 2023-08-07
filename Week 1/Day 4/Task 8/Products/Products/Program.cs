namespace Products
{
    internal class Program
    {
        internal class Product
        {
            public string Name { get; set; }
            public string Category { get; set; }
            public decimal Price { get; set; }
        }

        static void Main(string[] args)
        {
            List<Product> products = new List<Product>
            {
            new Product { Name = "Laptop", Category = "Electronics", Price = 1200.00M },
            new Product { Name = "Smartphone", Category = "Electronics", Price = 800.00M },
            new Product { Name = "Headphones", Category = "Electronics", Price = 200.00M },
            new Product { Name = "Shirt", Category = "Clothing", Price = 30.00M },
            new Product { Name = "Jeans", Category = "Clothing", Price = 60.00M },
            new Product { Name = "Sneakers", Category = "Footwear", Price = 100.00M }
             };

            var group_by_category = from product in products
                                    group product by product.Category;
             
            foreach(var group in group_by_category)
            {
                Console.WriteLine("\nCategory: {0}", group.Key);
                foreach (var product in group)
                {
                    Console.WriteLine("{0} , {1} , {2}", product.Name, product.Category, product.Price);
                }
            }
            Console.ReadKey(true);

            
        }
    }
}