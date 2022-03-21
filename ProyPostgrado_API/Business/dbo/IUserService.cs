using System;
using System.Collections.Generic;
using System.Text;
using Entities.Request;
using Entities.Response;

namespace Business.dbo
{
    interface IUserService
    {
       UserResponse Auth(AuthRequest model);
       
    }
}
