namespace Business.dbo
{
    using Microsoft.Extensions.Configuration;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using CodeMono.Entities;
    using Entities.dbo;
    using DataAccess.dbo;
    
    /// <summary>
    /// Defines the <see cref="detalle_matriculaService" />.
    /// </summary>
    public class detalle_matriculaService
    {
        /// <summary>
        /// Defines the dao.
        /// </summary>
        private readonly detalle_matriculaDao dao;

        /// <summary>
        /// Defines the m.
        /// </summary>
        private ResponseModel m;

        /// <summary>
        /// Initializes a new instance of the <see cref="detalle_matriculaService"/> class.
        /// </summary>
        /// <param name="config">The config<see cref="IConfiguration"/>.</param>
        /// <param name="con">The con<see cref="string"/>.</param>
        public detalle_matriculaService(IConfiguration config, string con)
        {
            dao = new detalle_matriculaDao(config, con);
            m = new ResponseModel();
        }

        /// <summary>
        /// The Getdetalle_matricula.
        /// </summary>
        /// <param name="parameters">The parameters<see cref="Dictionary{string, dynamic}"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        public async Task<ResponseModel> Getdetalle_matricula(Dictionary<string, dynamic> parameters)
        {
            try
            {
                var res = await dao.Getdetalle_matricula<detalle_matriculaModel>(parameters);
                m.data = res;
                m.executionError = false;
                m.message = "";
            }
            catch (Exception ex)
            {
                m.data = null;
                m.executionError = true;
                m.message = "Error: " + ex.Message + ". " + ex.InnerException;
            }
            return m;
        }


        /// <summary>
        /// The Postdetalle_matricula.
        /// </summary>
        /// <param name="parameters">The parameters<see cref="Dictionary{string, dynamic}"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        public async Task<ResponseModel> Postdetalle_matricula(Dictionary<string, dynamic> parameters)
        {
            try
            {
                var res = await dao.Postdetalle_matricula<detalle_matriculaPostModel>(parameters);
                m.data = res;
                m.executionError = false;
                m.message = "";
            }
            catch (Exception ex)
            {
                m.data = null;
                m.executionError = true;
                m.message = "Error: " + ex.Message + ". " + ex.InnerException;
            }

            return m;
        }

        /// <summary>
        /// The Putdetalle_matricula.
        /// </summary>
        /// <param name="parameters">The parameters<see cref="Dictionary{string, dynamic}"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        public async Task<ResponseModel> Putdetalle_matricula(Dictionary<string, dynamic> parameters)
        {
            try
            {
                var res = await dao.Putdetalle_matricula<detalle_matriculaPutModel>(parameters);
                m.data = res;
                m.executionError = false;
                m.message = "";
            }
            catch (Exception ex)
            {
                m.data = null;
                m.executionError = true;
                m.message = "Error: " + ex.Message + ". " + ex.InnerException;
            }

            return m;
        }

        /// <summary>
        /// The Deletedetalle_matricula.
        /// </summary>
        /// <param name="parameters">The parameters<see cref="Dictionary{string, dynamic}"/>.</param>
        /// <returns>The <see cref="Task{ResponseModel}"/>.</returns>
        public async Task<ResponseModel> Deletedetalle_matricula(Dictionary<string, dynamic> parameters)
        {
            try
            {
                var res = await dao.Deletedetalle_matricula<detalle_matriculaDeleteModel>(parameters);
                m.data = res;
                m.executionError = false;
                m.message = "";
            }
            catch (Exception ex)
            {
                m.data = null;
                m.executionError = true;
                m.message = "Error: " + ex.Message + ". " + ex.InnerException;
            }
            return m;
        }

    }
}

