using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviesAngular.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public String Title { get; set; }
        public int ReleaseYear { get; set; }
        public int Runtime { get; set; }
    }
}