using System;

namespace Entities.dbo
{
    public class facultadModel
    {
		public Int32 id_facultad { get; set; }
		public String nombre { get; set; }

    }
    public class facultadPostModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_facultad { get; set; }

    }

    public class facultadPutModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_facultad { get; set; }

    }


    public class facultadDeleteModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_facultad { get; set; }

    }

}
