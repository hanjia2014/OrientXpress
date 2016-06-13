using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrientXpress.Models
{
    public class Event
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        [Required(ErrorMessage = "Title is Mandatory")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Content is Mandatory")]
        public string Content { get; set; }
        [Required(ErrorMessage = "Date is Mandatory")]
        public DateTime Date { get; set; }
    }
}
