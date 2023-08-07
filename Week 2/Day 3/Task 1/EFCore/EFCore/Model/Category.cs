using System.ComponentModel.DataAnnotations;

namespace EFCore.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        // Add other category properties as needed
    }
}
