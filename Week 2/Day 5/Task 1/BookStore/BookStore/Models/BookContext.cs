using Microsoft.EntityFrameworkCore;

namespace BookStore.Models
{
    public class BookContext : DbContext
    {
        public BookContext(DbContextOptions<BookContext> options)
        : base(options)
        {
        }

        public DbSet<BookItem> BookItems { get; set; }
        

        
        //public object BookItems { get; internal set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<BookItem>().ToTable("BookItems");

        //}
    }

    
    
}
