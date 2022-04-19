using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.dbo
{
    public class vMatriculaModel
	{

        
		public Int32 id_curso { get; set; }
		public String nombre_curso { get; set; }
		public Int32 id_usuario { get; set; }
		public String usuario_apellido { get; set; }
		public String usuario_nombre { get; set; }
		public Int32 id_mencion { get; set; }
		public String mencion_nombre { get; set; }
		public Int32 id_periodo { get; set; }
		public String periodo { get; set; }		
		public Int32? ciclo { get; set; }
		public Int32? estado { get; set; }
		public Int32? id_curso_matricula { get; set; }


	}
}
