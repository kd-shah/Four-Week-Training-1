using System.ComponentModel.DataAnnotations;

namespace EFCore.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        // Add other product properties as needed
    }
}
