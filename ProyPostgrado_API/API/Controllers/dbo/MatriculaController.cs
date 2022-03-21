namespace API.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Business.dbo;
    using Entities.dbo;

    /// <summary>
    /// Defines the <see cref="MatriculaController" />.
    /// </summary>
    [Route("dbo/[controller]")]
    [ApiController]
    public class MatriculaController: ControllerBase
    {
        /// <summary>
        /// Defines the business.
        /// </summary>
        private readonly MatriculaService business;

        /// <summary>
        /// Initializes a new instance of the <see cref="MatriculaController"/> class.
        /// </summary>
        /// <param name="config">The config<see cref="IConfiguration"/>.</param>
        public MatriculaController(IConfiguration config)
        {
            business = new MatriculaService(config, "Development");
        }

        /// <summary>
        /// The GetMatricula.
        /// </summary>
        /// <param name="ProjectId">The ProjectId<see cref="int?"/>.</param>
        /// <param name="ProjectName">The ProjectName<see cref="string"/>.</param>
        /// <param name="Active">The Activo<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet]
        public async Task<IActionResult> GetMatricula(Int32? id_matricula)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_matricula", id_matricula }
            };

            var result = await business.GetMatricula(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The GetMatricula.
        /// </summary>
        /// <param name="id">The ProjectId<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet("{id_matricula}")]
        public async Task<IActionResult> GetMatricula(Int32 id_matricula)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_matricula", id_matricula }
            };

            var result = await business.GetMatricula(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The PostMatricula.
        /// </summary>
        /// <param name="model">The model<see cref="MatriculaModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPost]
        public async Task<IActionResult> PostMatricula(MatriculaModel model)
        {
            Int32 CreatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_usuario", model.id_usuario },
				{"id_periodo", model.id_periodo },
				{"id_mencion", model.id_mencion },
				{"ciclo", model.ciclo },
				{"estado", model.estado }
            };

            var result = await business.PostMatricula(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The PutMatricula.
        /// </summary>
        /// <param name="model">The model<see cref="MatriculaModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPut]
        public async Task<IActionResult> PutMatricula(MatriculaModel model)
        {
            Int32 UpdatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_matricula", model.id_matricula },
				{"id_usuario", model.id_usuario },
				{"id_periodo", model.id_periodo },
				{"id_mencion", model.id_mencion },
				{"ciclo", model.ciclo },
				{"estado", model.estado }
            };
            
            var result = await business.PutMatricula(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The DeleteMatricula.
        /// </summary>
        /// <param name="model">The model<see cref="MatriculaModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpDelete("{id_matricula}")]
        public async Task<IActionResult> DeleteMatricula(Int32? id_matricula)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"id_matricula", id_matricula }
            };

            var result = await business.DeleteMatricula(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

    }
}

