using System;

namespace Entities.dbo
{
    public class MatriculaModel
    {
		public Int32 id_matricula { get; set; }
		public Int32 id_usuario { get; set; }
		public Int32 id_periodo { get; set; }
		public Int32 id_mencion { get; set; }
		public Int32? ciclo { get; set; }
		public Int32? estado { get; set; }

    }
    public class MatriculaPostModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_matricula { get; set; }

    }

    public class MatriculaPutModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_matricula { get; set; }

    }


    public class MatriculaDeleteModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_matricula { get; set; }

    }

}
