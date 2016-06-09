using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrientXpress.Models
{
    public class Video
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ID { get; set; }
        [Required(ErrorMessage = "Title is Mandatory")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Date is Mandatory")]
        public DateTime Date { get; set; }
        [Required(ErrorMessage = "Url is Mandatory")]
        public string Url { get; set; }
    }
}
