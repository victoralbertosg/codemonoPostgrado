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
    /// Defines the <see cref="inscripcionController" />.
    /// </summary>
    [Route("dbo/[controller]")]
    [ApiController]
    public class inscripcionController: ControllerBase
    {
        /// <summary>
        /// Defines the business.
        /// </summary>
        private readonly inscripcionService business;

        /// <summary>
        /// Initializes a new instance of the <see cref="inscripcionController"/> class.
        /// </summary>
        /// <param name="config">The config<see cref="IConfiguration"/>.</param>
        public inscripcionController(IConfiguration config)
        {
            business = new inscripcionService(config, "Development");
        }

        /// <summary>
        /// The Getinscripcion.
        /// </summary>
        /// <param name="ProjectId">The ProjectId<see cref="int?"/>.</param>
        /// <param name="ProjectName">The ProjectName<see cref="string"/>.</param>
        /// <param name="Active">The Activo<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet]
        public async Task<IActionResult> Getinscripcion(Int32? id_inscripcion)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_inscripcion", id_inscripcion }
            };

            var result = await business.Getinscripcion(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Getinscripcion.
        /// </summary>
        /// <param name="id">The ProjectId<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet("{id_inscripcion}")]
        public async Task<IActionResult> Getinscripcion(Int32 id_inscripcion)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_inscripcion", id_inscripcion }
            };

            var result = await business.Getinscripcion(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Postinscripcion.
        /// </summary>
        /// <param name="model">The model<see cref="inscripcionModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPost]
        public async Task<IActionResult> Postinscripcion(inscripcionModel model)
        {
            Int32 CreatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_mencion", model.id_mencion },
				{"id_usuario", model.id_usuario },
				{"urlfile", model.urlfile },
				{"estado", model.estado }
            };

            var result = await business.Postinscripcion(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Putinscripcion.
        /// </summary>
        /// <param name="model">The model<see cref="inscripcionModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPut]
        public async Task<IActionResult> Putinscripcion(inscripcionModel model)
        {
            Int32 UpdatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_inscripcion", model.id_inscripcion },
				{"id_mencion", model.id_mencion },
				{"id_usuario", model.id_usuario },
				{"urlfile", model.urlfile },
				{"estado", model.estado }
            };
            
            var result = await business.Putinscripcion(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Deleteinscripcion.
        /// </summary>
        /// <param name="model">The model<see cref="inscripcionModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpDelete("{id_inscripcion}")]
        public async Task<IActionResult> Deleteinscripcion(Int32? id_inscripcion)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"id_inscripcion", id_inscripcion }
            };

            var result = await business.Deleteinscripcion(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

    }
}

