using System;

namespace Entities.dbo
{
    public class mencionModel
    {
		public Int32 id_mencion { get; set; }
		public Int32 id_facultad { get; set; }
		public String nombre { get; set; }

    }
    public class mencionPostModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_mencion { get; set; }

    }

    public class mencionPutModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_mencion { get; set; }

    }


    public class mencionDeleteModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_mencion { get; set; }

    }

}
