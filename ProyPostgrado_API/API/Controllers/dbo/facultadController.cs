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
    /// Defines the <see cref="facultadController" />.
    /// </summary>
    [Route("dbo/[controller]")]
    [ApiController]
    public class facultadController: ControllerBase
    {
        /// <summary>
        /// Defines the business.
        /// </summary>
        private readonly facultadService business;

        /// <summary>
        /// Initializes a new instance of the <see cref="facultadController"/> class.
        /// </summary>
        /// <param name="config">The config<see cref="IConfiguration"/>.</param>
        public facultadController(IConfiguration config)
        {
            business = new facultadService(config, "Development");
        }

        /// <summary>
        /// The Getfacultad.
        /// </summary>
        /// <param name="ProjectId">The ProjectId<see cref="int?"/>.</param>
        /// <param name="ProjectName">The ProjectName<see cref="string"/>.</param>
        /// <param name="Active">The Activo<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet]
        public async Task<IActionResult> Getfacultad(Int32? id_facultad)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_facultad", id_facultad }
            };

            var result = await business.Getfacultad(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Getfacultad.
        /// </summary>
        /// <param name="id">The ProjectId<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet("{id_facultad}")]
        public async Task<IActionResult> Getfacultad(Int32 id_facultad)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_facultad", id_facultad }
            };

            var result = await business.Getfacultad(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Postfacultad.
        /// </summary>
        /// <param name="model">The model<see cref="facultadModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPost]
        public async Task<IActionResult> Postfacultad(facultadModel model)
        {
            Int32 CreatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"nombre", model.nombre }
            };

            var result = await business.Postfacultad(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Putfacultad.
        /// </summary>
        /// <param name="model">The model<see cref="facultadModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPut]
        public async Task<IActionResult> Putfacultad(facultadModel model)
        {
            Int32 UpdatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_facultad", model.id_facultad },
				{"nombre", model.nombre }
            };
            
            var result = await business.Putfacultad(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Deletefacultad.
        /// </summary>
        /// <param name="model">The model<see cref="facultadModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpDelete("{id_facultad}")]
        public async Task<IActionResult> Deletefacultad(Int32? id_facultad)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"id_facultad", id_facultad }
            };

            var result = await business.Deletefacultad(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

    }
}

