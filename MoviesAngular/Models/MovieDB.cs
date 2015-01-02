using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MoviesAngular.Models
{
    public class MovieDB : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
    }
}