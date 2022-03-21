using System;

namespace Entities.dbo
{
    public class alumno_avanceModel
    {
		public Int32 id_avance { get; set; }
		public Int32 id_usuario { get; set; }
		public Int32? ciclo { get; set; }
		public DateTime? fecha_registro { get; set; }
		public Int32? estado { get; set; }

    }
    public class alumno_avancePostModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_avance { get; set; }

    }

    public class alumno_avancePutModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_avance { get; set; }

    }


    public class alumno_avanceDeleteModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_avance { get; set; }

    }

}
