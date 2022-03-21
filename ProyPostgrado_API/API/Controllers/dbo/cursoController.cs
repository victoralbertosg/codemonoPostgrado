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
    /// Defines the <see cref="cursoController" />.
    /// </summary>
    [Route("dbo/[controller]")]
    [ApiController]
    public class cursoController: ControllerBase
    {
        /// <summary>
        /// Defines the business.
        /// </summary>
        private readonly cursoService business;

        /// <summary>
        /// Initializes a new instance of the <see cref="cursoController"/> class.
        /// </summary>
        /// <param name="config">The config<see cref="IConfiguration"/>.</param>
        public cursoController(IConfiguration config)
        {
            business = new cursoService(config, "Development");
        }

        /// <summary>
        /// The Getcurso.
        /// </summary>
        /// <param name="ProjectId">The ProjectId<see cref="int?"/>.</param>
        /// <param name="ProjectName">The ProjectName<see cref="string"/>.</param>
        /// <param name="Active">The Activo<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet]
        public async Task<IActionResult> Getcurso(Int32? id_curso)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_curso", id_curso }
            };

            var result = await business.Getcurso(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Getcurso.
        /// </summary>
        /// <param name="id">The ProjectId<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet("{id_curso}")]
        public async Task<IActionResult> Getcurso(Int32 id_curso)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_curso", id_curso }
            };

            var result = await business.Getcurso(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Postcurso.
        /// </summary>
        /// <param name="model">The model<see cref="cursoModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPost]
        public async Task<IActionResult> Postcurso(cursoModel model)
        {
            Int32 CreatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_mencion", model.id_mencion },
				{"nombre_curso", model.nombre_curso },
				{"credito", model.credito },
				{"prerequisito", model.prerequisito },
				{"ciclo", model.ciclo }
            };

            var result = await business.Postcurso(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Putcurso.
        /// </summary>
        /// <param name="model">The model<see cref="cursoModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPut]
        public async Task<IActionResult> Putcurso(cursoModel model)
        {
            Int32 UpdatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_curso", model.id_curso },
				{"id_mencion", model.id_mencion },
				{"nombre_curso", model.nombre_curso },
				{"credito", model.credito },
				{"prerequisito", model.prerequisito },
				{"ciclo", model.ciclo }
            };
            
            var result = await business.Putcurso(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Deletecurso.
        /// </summary>
        /// <param name="model">The model<see cref="cursoModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpDelete("{id_curso}")]
        public async Task<IActionResult> Deletecurso(Int32? id_curso)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"id_curso", id_curso }
            };

            var result = await business.Deletecurso(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

    }
}

