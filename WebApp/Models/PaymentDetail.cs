using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
    public class PaymentDetail
    {
        //using System.ComponentModel.DataAnnotations; 
        [Key]
        public int PMId { get; set; }
        //using System.ComponentModel.DataAnnotations.Schema;
        [Required]
        [Column(TypeName = "nvarchar(100)")]


        public string CardOwnerNAme { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(16)")]


        public string CardNumber { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(5)")]


        public string ExpirationDate { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(3)")]


        public int CVV { get; set; }
    }
}
