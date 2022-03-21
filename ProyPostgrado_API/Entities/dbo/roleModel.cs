using System;

namespace Entities.dbo
{
    public class roleModel
    {
		public Int32 id_role { get; set; }
		public String descripcion { get; set; }

    }
    public class rolePostModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_role { get; set; }

    }

    public class rolePutModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_role { get; set; }

    }


    public class roleDeleteModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_role { get; set; }

    }

}
