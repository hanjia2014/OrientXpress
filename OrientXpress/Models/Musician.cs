using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrientXpress.Models
{
    public class Musician
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        public string Title { get; set; }
        [Required(ErrorMessage = "FirstName is Mandatory"), StringLength(50)]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "LastName is Mandatory"), StringLength(50)]
        public string LastName { get; set; }
        public string Description { get; set; }
        public byte[] Image { get; set; }

        public string ConvertImageString()
        {
            if (Image == null || Image.Length == 0)
                return string.Empty;
            var base64 = Convert.ToBase64String(Image);
            return string.Format("data:image/gif;base64,{0}", base64);
        }
    }
}
