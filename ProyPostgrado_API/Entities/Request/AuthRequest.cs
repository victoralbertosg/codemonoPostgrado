using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entities.Request
{
    public class AuthRequest
    {
        [Required]
        public int dni { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
