using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Response
{
    public class UserResponse
    {
        public long idusuario { get; set; }
        public string Token { get; set; }
        public int rol { get; set; }
    }
}
