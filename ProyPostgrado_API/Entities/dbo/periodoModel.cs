using System;

namespace Entities.dbo
{
    public class periodoModel
    {
		public Int32 id_periodo { get; set; }
		public String periodo { get; set; }
		public String descripcion { get; set; }
		public Int32? estado { get; set; }

    }
    public class periodoPostModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_periodo { get; set; }

    }

    public class periodoPutModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_periodo { get; set; }

    }


    public class periodoDeleteModel
    {
		public Int16 ErrorId { get; set; }
		public String Message { get; set; }
		public Int32 id_periodo { get; set; }

    }

}
