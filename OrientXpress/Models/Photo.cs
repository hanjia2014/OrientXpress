using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrientXpress.Models
{
    public class Photo
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        [Required(ErrorMessage = "Date is Mandatory")]
        [Display(Name = "Date")]
        public DateTime Date { get; set; }
        public string Title { get; set; }
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
