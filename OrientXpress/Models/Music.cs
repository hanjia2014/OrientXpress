using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrientXpress.Models
{
    public class Music
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is Mandatory")]
        public string Name { get; set; }
        [DisplayName("Genre")]
        public int GenreId { get; set; }
        public string Description { get; set; }
        public Genre Genre { get; set; }
    }
}
