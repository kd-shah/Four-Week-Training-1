using Microsoft.AspNetCore.Routing.Constraints;

namespace BookStore.Models
{
    public class BookItem
    {
        public int Id { get; set; }
        public string Title { get; set; }   
        public string Author { get; set; }

        public string Genre { get; set; }

        public float Price { get; set; }
    }
}
