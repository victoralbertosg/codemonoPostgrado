using System;

namespace Entities.dbo
{
    public class usuarioModel
    {
		public Int32 id_usuario { get; set; }
		public String nombre { get; set; }
		public String apellido { get; set; }
		public String email { get; set; }
		public Int32 dni { get; set; }
		public Int32 id_rol { get; set; }
		public Int32? ciclo { get; set; }
		public String password { get; set; }
		public Int32? estado { get; set; }

    }
    public class usuarioPostModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_usuario { get; set; }

    }

    public class usuarioPutModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_usuario { get; set; }

    }


    public class usuarioDeleteModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_usuario { get; set; }

    }

}
