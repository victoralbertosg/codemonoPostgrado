using System;

namespace Entities.dbo
{
    public class detalle_matriculaModel
    {
		public Int32 id_curso_matricula { get; set; }
		public Int32 id_matricula { get; set; }
		public Int32 id_curso { get; set; }
		public Int32? estado { get; set; }
		public Int32? promedio { get; set; }

    }
    public class detalle_matriculaPostModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_curso_matricula { get; set; }

    }

    public class detalle_matriculaPutModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_curso_matricula { get; set; }

    }


    public class detalle_matriculaDeleteModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_curso_matricula { get; set; }

    }

}
