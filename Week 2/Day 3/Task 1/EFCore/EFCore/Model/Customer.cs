using System.ComponentModel.DataAnnotations;

namespace EFCore.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        // Add other customer properties as needed
    }
}
