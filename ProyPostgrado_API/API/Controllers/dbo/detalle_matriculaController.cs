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
    /// Defines the <see cref="detalle_matriculaController" />.
    /// </summary>
    [Route("dbo/[controller]")]
    [ApiController]
    public class detalle_matriculaController: ControllerBase
    {
        /// <summary>
        /// Defines the business.
        /// </summary>
        private readonly detalle_matriculaService business;

        /// <summary>
        /// Initializes a new instance of the <see cref="detalle_matriculaController"/> class.
        /// </summary>
        /// <param name="config">The config<see cref="IConfiguration"/>.</param>
        public detalle_matriculaController(IConfiguration config)
        {
            business = new detalle_matriculaService(config, "Development");
        }

        /// <summary>
        /// The Getdetalle_matricula.
        /// </summary>
        /// <param name="ProjectId">The ProjectId<see cref="int?"/>.</param>
        /// <param name="ProjectName">The ProjectName<see cref="string"/>.</param>
        /// <param name="Active">The Activo<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet]
        public async Task<IActionResult> Getdetalle_matricula(Int32? id_curso_matricula)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_curso_matricula", id_curso_matricula }
            };

            var result = await business.Getdetalle_matricula(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Getdetalle_matricula.
        /// </summary>
        /// <param name="id">The ProjectId<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet("{id_curso_matricula}")]
        public async Task<IActionResult> Getdetalle_matricula(Int32 id_curso_matricula)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_curso_matricula", id_curso_matricula }
            };

            var result = await business.Getdetalle_matricula(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Postdetalle_matricula.
        /// </summary>
        /// <param name="model">The model<see cref="detalle_matriculaModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPost]
        public async Task<IActionResult> Postdetalle_matricula(detalle_matriculaModel model)
        {
            Int32 CreatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_matricula", model.id_matricula },
				{"id_curso", model.id_curso },
				{"estado", model.estado },
				{"promedio", model.promedio }
            };

            var result = await business.Postdetalle_matricula(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Putdetalle_matricula.
        /// </summary>
        /// <param name="model">The model<see cref="detalle_matriculaModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPut]
        public async Task<IActionResult> Putdetalle_matricula(detalle_matriculaModel model)
        {
            Int32 UpdatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_curso_matricula", model.id_curso_matricula },
				{"id_matricula", model.id_matricula },
				{"id_curso", model.id_curso },
				{"estado", model.estado },
				{"promedio", model.promedio }
            };
            
            var result = await business.Putdetalle_matricula(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Deletedetalle_matricula.
        /// </summary>
        /// <param name="model">The model<see cref="detalle_matriculaModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpDelete("{id_curso_matricula}")]
        public async Task<IActionResult> Deletedetalle_matricula(Int32? id_curso_matricula)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"id_curso_matricula", id_curso_matricula }
            };

            var result = await business.Deletedetalle_matricula(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

    }
}

