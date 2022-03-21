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
    /// Defines the <see cref="alumno_avanceController" />.
    /// </summary>
    [Route("dbo/[controller]")]
    [ApiController]
    public class alumno_avanceController: ControllerBase
    {
        /// <summary>
        /// Defines the business.
        /// </summary>
        private readonly alumno_avanceService business;

        /// <summary>
        /// Initializes a new instance of the <see cref="alumno_avanceController"/> class.
        /// </summary>
        /// <param name="config">The config<see cref="IConfiguration"/>.</param>
        public alumno_avanceController(IConfiguration config)
        {
            business = new alumno_avanceService(config, "Development");
        }

        /// <summary>
        /// The Getalumno_avance.
        /// </summary>
        /// <param name="ProjectId">The ProjectId<see cref="int?"/>.</param>
        /// <param name="ProjectName">The ProjectName<see cref="string"/>.</param>
        /// <param name="Active">The Activo<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet]
        public async Task<IActionResult> Getalumno_avance(Int32? id_avance)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_avance", id_avance }
            };

            var result = await business.Getalumno_avance(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Getalumno_avance.
        /// </summary>
        /// <param name="id">The ProjectId<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet("{id_avance}")]
        public async Task<IActionResult> Getalumno_avance(Int32 id_avance)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_avance", id_avance }
            };

            var result = await business.Getalumno_avance(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Postalumno_avance.
        /// </summary>
        /// <param name="model">The model<see cref="alumno_avanceModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPost]
        public async Task<IActionResult> Postalumno_avance(alumno_avanceModel model)
        {
            Int32 CreatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_usuario", model.id_usuario },
				{"ciclo", model.ciclo },
				{"fecha_registro", model.fecha_registro },
				{"estado", model.estado }
            };

            var result = await business.Postalumno_avance(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Putalumno_avance.
        /// </summary>
        /// <param name="model">The model<see cref="alumno_avanceModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPut]
        public async Task<IActionResult> Putalumno_avance(alumno_avanceModel model)
        {
            Int32 UpdatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_avance", model.id_avance },
				{"id_usuario", model.id_usuario },
				{"ciclo", model.ciclo },
				{"fecha_registro", model.fecha_registro },
				{"estado", model.estado }
            };
            
            var result = await business.Putalumno_avance(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Deletealumno_avance.
        /// </summary>
        /// <param name="model">The model<see cref="alumno_avanceModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpDelete("{id_avance}")]
        public async Task<IActionResult> Deletealumno_avance(Int32? id_avance)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"id_avance", id_avance }
            };

            var result = await business.Deletealumno_avance(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

    }
}

