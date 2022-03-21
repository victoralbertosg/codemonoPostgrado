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
    /// Defines the <see cref="periodoController" />.
    /// </summary>
    [Route("dbo/[controller]")]
    [ApiController]
    public class periodoController: ControllerBase
    {
        /// <summary>
        /// Defines the business.
        /// </summary>
        private readonly periodoService business;

        /// <summary>
        /// Initializes a new instance of the <see cref="periodoController"/> class.
        /// </summary>
        /// <param name="config">The config<see cref="IConfiguration"/>.</param>
        public periodoController(IConfiguration config)
        {
            business = new periodoService(config, "Development");
        }

        /// <summary>
        /// The Getperiodo.
        /// </summary>
        /// <param name="ProjectId">The ProjectId<see cref="int?"/>.</param>
        /// <param name="ProjectName">The ProjectName<see cref="string"/>.</param>
        /// <param name="Active">The Activo<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet]
        public async Task<IActionResult> Getperiodo(Int32? id_periodo)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_periodo", id_periodo }
            };

            var result = await business.Getperiodo(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Getperiodo.
        /// </summary>
        /// <param name="id">The ProjectId<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet("{id_periodo}")]
        public async Task<IActionResult> Getperiodo(Int32 id_periodo)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_periodo", id_periodo }
            };

            var result = await business.Getperiodo(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Postperiodo.
        /// </summary>
        /// <param name="model">The model<see cref="periodoModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPost]
        public async Task<IActionResult> Postperiodo(periodoModel model)
        {
            Int32 CreatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"periodo", model.periodo },
				{"descripcion", model.descripcion },
				{"estado", model.estado }
            };

            var result = await business.Postperiodo(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Putperiodo.
        /// </summary>
        /// <param name="model">The model<see cref="periodoModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPut]
        public async Task<IActionResult> Putperiodo(periodoModel model)
        {
            Int32 UpdatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_periodo", model.id_periodo },
				{"periodo", model.periodo },
				{"descripcion", model.descripcion },
				{"estado", model.estado }
            };
            
            var result = await business.Putperiodo(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Deleteperiodo.
        /// </summary>
        /// <param name="model">The model<see cref="periodoModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpDelete("{id_periodo}")]
        public async Task<IActionResult> Deleteperiodo(Int32? id_periodo)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"id_periodo", id_periodo }
            };

            var result = await business.Deleteperiodo(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

    }
}

