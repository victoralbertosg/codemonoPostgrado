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
    /// Defines the <see cref="mencionController" />.
    /// </summary>
    [Route("dbo/[controller]")]
    [ApiController]
    public class mencionController: ControllerBase
    {
        /// <summary>
        /// Defines the business.
        /// </summary>
        private readonly mencionService business;

        /// <summary>
        /// Initializes a new instance of the <see cref="mencionController"/> class.
        /// </summary>
        /// <param name="config">The config<see cref="IConfiguration"/>.</param>
        public mencionController(IConfiguration config)
        {
            business = new mencionService(config, "Development");
        }

        /// <summary>
        /// The Getmencion.
        /// </summary>
        /// <param name="ProjectId">The ProjectId<see cref="int?"/>.</param>
        /// <param name="ProjectName">The ProjectName<see cref="string"/>.</param>
        /// <param name="Active">The Activo<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet]
        public async Task<IActionResult> Getmencion(Int32? id_mencion)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_mencion", id_mencion }
            };

            var result = await business.Getmencion(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Getmencion.
        /// </summary>
        /// <param name="id">The ProjectId<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet("{id_mencion}")]
        public async Task<IActionResult> Getmencion(Int32 id_mencion)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_mencion", id_mencion }
            };

            var result = await business.Getmencion(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Postmencion.
        /// </summary>
        /// <param name="model">The model<see cref="mencionModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPost]
        public async Task<IActionResult> Postmencion(mencionModel model)
        {
            Int32 CreatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_facultad", model.id_facultad },
				{"nombre", model.nombre }
            };

            var result = await business.Postmencion(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Putmencion.
        /// </summary>
        /// <param name="model">The model<see cref="mencionModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPut]
        public async Task<IActionResult> Putmencion(mencionModel model)
        {
            Int32 UpdatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_mencion", model.id_mencion },
				{"id_facultad", model.id_facultad },
				{"nombre", model.nombre }
            };
            
            var result = await business.Putmencion(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Deletemencion.
        /// </summary>
        /// <param name="model">The model<see cref="mencionModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpDelete("{id_mencion}")]
        public async Task<IActionResult> Deletemencion(Int32? id_mencion)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"id_mencion", id_mencion }
            };

            var result = await business.Deletemencion(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

    }
}

