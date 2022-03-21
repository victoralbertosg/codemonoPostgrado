using System;

namespace Entities.dbo
{
    public class inscripcionModel
    {
		public Int32 id_inscripcion { get; set; }
		public Int32 id_mencion { get; set; }
		public Int32 id_usuario { get; set; }
		public String urlfile { get; set; }
		public Int32? estado { get; set; }

    }
    public class inscripcionPostModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_inscripcion { get; set; }

    }

    public class inscripcionPutModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_inscripcion { get; set; }

    }


    public class inscripcionDeleteModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_inscripcion { get; set; }

    }

}
