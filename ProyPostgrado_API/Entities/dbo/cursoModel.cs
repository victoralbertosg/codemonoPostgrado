using System;

namespace Entities.dbo
{
    public class cursoModel
    {
		public Int32 id_curso { get; set; }
		public Int32 id_mencion { get; set; }
		public String nombre_curso { get; set; }
		public Int32? credito { get; set; }
		public Int32? prerequisito { get; set; }
		public Int32? ciclo { get; set; }

    }
    public class cursoPostModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_curso { get; set; }

    }

    public class cursoPutModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_curso { get; set; }

    }


    public class cursoDeleteModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_curso { get; set; }

    }

}
