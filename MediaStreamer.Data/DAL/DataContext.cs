using MediaStreamer.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace MediaStreamer.Data.DAL
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<UsersModel> Users { get; set; }
    }
}
