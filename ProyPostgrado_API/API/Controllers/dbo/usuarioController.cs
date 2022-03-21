using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using Business.dbo;
using Business.tools;
using Entities.dbo;

namespace API.Controllers
{
    /// <summary>
    /// Defines the <see cref="usuarioController" />.
    /// </summary>
    [Route("dbo/[controller]")]
    [ApiController]
    public class usuarioController: ControllerBase
    {
        /// <summary>
        /// Defines the business.
        /// </summary>
        private readonly usuarioService business;

        /// <summary>
        /// Initializes a new instance of the <see cref="usuarioController"/> class.
        /// </summary>
        /// <param name="config">The config<see cref="IConfiguration"/>.</param>
        public usuarioController(IConfiguration config)
        {
            business = new usuarioService(config, "Development");
        }

        /// <summary>
        /// The Getusuario.
        /// </summary>
        /// <param name="ProjectId">The ProjectId<see cref="int?"/>.</param>
        /// <param name="ProjectName">The ProjectName<see cref="string"/>.</param>
        /// <param name="Active">The Activo<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet]
        public async Task<IActionResult> Getusuario(Int32? id_usuario)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_usuario", id_usuario }
            };

            var result = await business.Getusuario(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Getusuario.
        /// </summary>
        /// <param name="id">The ProjectId<see cref="int?"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpGet("{id_usuario}")]
        public async Task<IActionResult> Getusuario(Int32 id_usuario)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_usuario", id_usuario }
            };

            var result = await business.Getusuario(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        
        /// <summary>
        /// The Postusuario.
        /// </summary>
        /// <param name="model">The model<see cref="usuarioModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPost]
        public async Task<IActionResult> Postusuario(usuarioModel model)
        {
            Int32 CreatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"nombre", model.nombre },
				{"apellido", model.apellido },
				{"email", model.email },
				{"dni", model.dni },
				{"id_rol", model.id_rol },
				{"ciclo", model.ciclo },
				{"password", Encript.GetSHA256(model.password) },
				{"estado", model.estado }
            };
            

            var result = await business.Postusuario(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Putusuario.
        /// </summary>
        /// <param name="model">The model<see cref="usuarioModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpPut]
        public async Task<IActionResult> Putusuario(usuarioModel model)
        {
            Int32 UpdatedBy = 0;

            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"Option", 1 },
				{"id_usuario", model.id_usuario },
				{"nombre", model.nombre },
				{"apellido", model.apellido },
				{"email", model.email },
				{"dni", model.dni },
				{"id_rol", model.id_rol },
				{"ciclo", model.ciclo },
				{"password", model.password },
				{"estado", model.estado }
            };
            
            var result = await business.Putusuario(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

        /// <summary>
        /// The Deleteusuario.
        /// </summary>
        /// <param name="model">The model<see cref="usuarioModel"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        [HttpDelete("{id_usuario}")]
        public async Task<IActionResult> Deleteusuario(Int32? id_usuario)
        {
            Dictionary<string, dynamic> parameters = new Dictionary<string, dynamic>()
            {
				{"id_usuario", id_usuario }
            };

            var result = await business.Deleteusuario(parameters);
            if (result.executionError)
            {
                return new BadRequestObjectResult(result);
            }
            return new OkObjectResult(result);
        }

    }
}


